import { openMysqlConnection } from "../../lib/server/mysql";

export async function get()	{
	let mysqlConnection = await openMysqlConnection();
	// TODO: refactor get method and add method to get all news
	let results = await mysqlConnection.query('SELECT * FROM mytable')
		.then(function([rows, fields])	{
			console.log(rows);
			return rows;
		});
	
	return { body: results};
}