import { openMysqlConnection } from "$lib/db/mysql";

export async function getAllNews() {
	let mysqlConn = await openMysqlConnection();

	try {
		const [rows] = await mysqlConn.query('select * from News');
		return rows;
	} catch (err) {
		throw new Error('Si è verificato un errore durante il recupero delle news.');
	} finally {
		mysqlConn.end();
	}
}

export async function getNewsById(id) {
	let mysqlConn = await openMysqlConnection();
	const [row] = await mysqlConn.execute('SELECT * FROM News WHERE ID = ? LIMIT 1', [id]);
	mysqlConn.end();

	if (row.length === 0) {
		throw new Error(`Nessuna news trovata con l'id ${id}`);
	}

	return row[0];
}

export async function createNews(news) {
	const { title, data } = news;
	const creationDate = new Date().toISOString();

	let mysqlConn = await openMysqlConnection();

	try {
		const [result] = await mysqlConn.execute(
			'INSERT INTO News (Title, Data, CreationDate) VALUES (?, ?, ?)',
			[title, data, creationDate]
		);

		const insertedId = result.insertId;
		return insertedId;
	} catch (err) {
		throw new Error('Si è verificato un errore durante l\'inserimento della news');
	} finally {
		mysqlConn.end();
	}
}

export async function getUser(username) {
	let mysqlConn = await openMysqlConnection();

	try {
		const [rows] = await mysqlConn.execute('SELECT * FROM Users WHERE username = ?', [username]);
		return rows;
	} catch (err) {
		throw new Error('Si è verificato un errore ner recupero delle credenziali dal database.');
	} finally {
		mysqlConn.end();
	}
}