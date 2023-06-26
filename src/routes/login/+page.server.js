import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

async function hash(pwd) {
	const salt = randomBytes(16).toString('hex');
	const buffer = await scryptAsync(pwd, salt, 64);

	return `${buffer.toString('hex')}.${salt}`;
}

async function compare(storedPwd, givenPwd)	{
	const [hashed, salt] = storedPwd.split('.');
	const hashedPwdBuff = Buffer.from(hashed, 'hex');
	const givenPwdBuff = await scryptAsync(givenPwd, salt, 64);

	return timingSafeEqual(hashedPwdBuff, givenPwdBuff);
}

export const actions = {
	login: async ({cookies, request}) => {
		const data = await request.formData();

		const username = data.get('username');
		const pwd = hash(data.get('password')?.toString());

		// TODO: get username and pwd from db
		// const uname_db;
		// const pwd_db;

		// if (compare(pwd_db, pwd))	{
		// 	// Pwd match
		// } else {
		// 	// Error
			
		// }
	}
};