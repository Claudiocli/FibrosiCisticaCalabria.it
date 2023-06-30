import { openMysqlConnection } from "$lib/server/mysql";
import { captureException, captureMessage } from "@sentry/sveltekit";

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
};

/** @type {import('../../$types').RequestHandler} */
export async function POST({ request, getClientAddress }) {
	const {username, uuid} = request.json();

	captureMessage(`${getClientAddress()} is updating uuid`);

	return await updateUUID(username, uuid);
}