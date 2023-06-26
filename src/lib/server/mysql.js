import mysql from 'mysql2/promise';

let mysqlConnection = null;

export function openMysqlConnection()	{
	if (!mysqlConnection)	{
		mysqlConnection = mysql.createConnection({
			host: 'myhost',
			user: 'root',
			password: 'mypassword',
			database: 'mydatabase'
		});
	}
	return mysqlConnection;
};