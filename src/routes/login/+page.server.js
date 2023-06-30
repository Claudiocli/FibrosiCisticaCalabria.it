import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { error, redirect } from '@sveltejs/kit';
import { captureException, captureMessage } from '@sentry/sveltekit';

const scryptAsync = promisify(scrypt);

async function hash(pwd) {
	const salt = randomBytes(16).toString('hex');
	const buffer = await scryptAsync(pwd, salt, 64);

	return `${buffer.toString('hex')}.${salt}`;
}

async function compare(storedPwd, givenPwd) {
	const [hashed, salt] = storedPwd.split('.');
	const hashedPwdBuff = Buffer.from(hashed, 'hex');
	const givenPwdBuff = await scryptAsync(givenPwd, salt, 64);

	return timingSafeEqual(hashedPwdBuff, givenPwdBuff);
}

export const actions = {
	login: async ({ cookies, request, getClientAddress }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = await hash(data.get('password')?.toString());

		const user = (await fetch('/api/user', {
			method: 'post',
			body: JSON.stringify({username: username})
		})).body;

		if (user && await compare(user.password, password)) {
			const uuid = crypto.randomUUID();

			await fetch('/api/user', {
				method: 'post',
				body: JSON.stringify({username: username, uuid: uuid})
			});
			cookies.set('userid', uuid, { path: '/login', httpOnly: true, maxAge: 60 * 60 * 24 });

			const ip = getClientAddress();
			captureMessage(`${ip} logged in`);

			throw redirect(302, '/a3ad1680-c9fd-475b-b38e-f2e5bcbb750b');
		} else {
			const ip = getClientAddress();
			captureException(new Error(`${ip} tried to log in, but failed`));
			throw error(401, 'Not logged in');
		}
	}
};