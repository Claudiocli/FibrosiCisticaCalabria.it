import { error } from '@sveltejs/kit';
import { openMysqlConnection } from '$lib/server/mysql';
import { captureException, captureMessage } from '@sentry/sveltekit';

async function compareId(username, id) {
	const user = (await fetch('/api/user', {
		method: 'post',
		body: JSON.stringify({username: username})
	})).body;
	return user.id === id;
};

function checkAdmin(user, id, ip) {
	if (!id || !compareId(user, id)) {
		captureException(new Error(`403 for ${ip}`));
		// Not admin
		throw error(403, 'Forbidden');
	}
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, getClientAdress }) {
	const user = cookies.get('username');
	const id = cookies.get('userid');

	checkAdmin(user, id, getClientAdress());
};

export const actions = {
	createNewPost: async ({ cookies, request, getClientAddress }) => {
		const user = cookies.get('username');
		const id = cookies.get('userid');

		checkAdmin(user, id, getClientAddress());

		const data = await request.formData();

		const title = data.get('title');
		const content = data.get('content');
		const currentDate = Date.now();

		const mysqlConn = await openMysqlConnection();

		captureMessage('Inserting a new object `News` into db...');

		try {
			await mysqlConn.execute('INSERT INTO News (Title, Content, CurrentDate) VALUES (?, ?, ?)', [title, content, currentDate]);

			captureMessage('Successfully Inserted a new object `News` into db');

			return {
				status: 200,
				body: { message: 'Post created successfully' }
			};
		} catch (error) {
			captureException(error);
			return {
				status: 500,
				body: { error: 'Failed to create post' }
			};
		} finally {
			mysqlConn.end();
		}
	}
};