import mysql from 'mysql2/promise';

let mysqlConnection = null;

export function openMysqlConnection()	{
	if (!mysqlConnection)	{
		mysqlConnection = mysql.createConnection({
			host: '62.149.150.230',
			user: 'Sql831063',
			// password: 'mypassword',
			database: 'Sql831063_2'
		});
	}
	return mysqlConnection;
};