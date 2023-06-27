import { error } from '@sveltejs/kit';
import { getUser } from '../api/data';
import { openMysqlConnection } from '$lib/db/mysql';

function compareId(username, id) {
	const user = await getUser(username);

	return user.id === id;
};

function checkAdmin(user, id) {
	if (!id || !compareId(user, id)) {
		// Not admin
		throw error(403, 'Forbidden');
	}
}

/** @type {import('./$types').RequestHandler} */
export function GET({ cookies }) {
	const user = cookies.get('username');
	const id = cookies.get('userid');

	checkAdmin(user, id);
};

export const actions = {
	createNewPost: async ({ cookies, request }) => {
		const user = cookies.get('username');
		const id = cookies.get('userid');

		checkAdmin(user, id);

		const data = await request.formData();

		const title = data.get('title');
		const content = data.get('content');
		const currentDate = Date.now();

		const mysqlConn = await openMysqlConnection();

		try {
			await mysqlConn.execute('INSERT INTO News (Title, Content, CurrentDate) VALUES (?, ?, ?)', [title, content, currentDate]);

			return {
				status: 200,
				body: { message: 'Post created successfully' }
			};
		} catch (error) {
			return {
				status: 500,
				body: { error: 'Failed to create post' }
			};
		} finally {
			mysqlConn.end();
		}
	}
};