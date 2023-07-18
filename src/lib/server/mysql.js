import { captureException, captureMessage } from '@sentry/sveltekit';
import mysql from 'mysql2/promise';

let mysqlConnection = null;

export function openMysqlConnection()	{
	if (mysqlConnection)	{
		captureMessage('Closing old mysql connection...');
		mysqlConnection.end();
		captureMessage('Mysql connection closed!');
	} else {
		captureMessage('No mysql connection, attempting to create one...');
	}
	try {
		captureMessage('Creating new mysql connection');
		mysqlConnection = mysql.createConnection({
			host:  import.meta.env.DB_HOST,
			user: import.meta.env.DB_USER,
			port: import.meta.env.DB_PORT,
			password: import.meta.env.DB_PASSWORD,
			database: import.meta.env.DB,
		});
		captureMessage('New mysql connection created');
	} catch (error) {
		captureException(error);
		throw new Error('Impossibile connettersi al database');
	}
	return mysqlConnection;
};