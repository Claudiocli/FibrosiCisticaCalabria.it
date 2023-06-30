import { openMysqlConnection } from "$lib/server/mysql";
import { captureException } from "@sentry/sveltekit";

async function getUser(username) {
	let mysqlConn = await openMysqlConnection();

	try {
		const [rows] = await mysqlConn.execute('SELECT * FROM Users WHERE username = ?', [username]);
		return rows;
	} catch (err) {
		captureException(new Error('Error when fetching ac from db'));
		throw new Error('Si è verificato un errore nel recupero delle credenziali dal database.');
	} finally {
		mysqlConn.end();
	}
}

async function updateUUID(username, uuid) {
	let mysqlConn = await openMysqlConnection();

	try {
		mysqlConn.execute('UPDATE `Users` SET `UUID` = ? WHERE Username = ?', [uuid, username]);
	} catch (err) {
		captureException(new Error('Error while updating uuid'));
		throw new Error('Si è verificato un errore tecnico nel log in');
	} finally {
		mysqlConn.end();
	}
}

/** @type {import('../../$types').RequestHandler} */
export async function POST({ request }) {
	const {username, uuid} = request.json();

	if (uuid)	{
		return updateUUID(username, uuid);
	} else {
		return await getUser(username);
	}
}
