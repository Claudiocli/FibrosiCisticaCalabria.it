import { openMysqlConnection } from "$lib/server/mysql";
import { captureException } from "@sentry/sveltekit";

async function getAllNews() {
	let mysqlConn = await openMysqlConnection();

	try {
		const [rows] = await mysqlConn.query('select * from News');
		return rows;
	} catch (err) {
		captureException(err);
		throw new Error('Si è verificato un errore durante il recupero delle news.');
	} finally {
		mysqlConn.end();
	}
}

async function getNewsById(id) {
	let mysqlConn = await openMysqlConnection();
	const [row] = await mysqlConn.execute('SELECT * FROM News WHERE ID = ? LIMIT 1', [id]);
	mysqlConn.end();

	if (row.length === 0) {
		captureException(new Error(`No news found with id ${id}`));
		throw new Error(`Nessuna news trovata con l'id ${id}`);
	}

	return JSON.parse(row[0]);
}

/** @type {import('../$types').RequestHandler} */
export async function GET({ url }) {
	const id = url.searchParams.get('id');

	if (id)	{
		return await getNewsById(id);
	} else {
		return await getAllNews();
	}
}
