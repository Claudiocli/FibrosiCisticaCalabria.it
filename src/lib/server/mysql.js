import { captureException, captureMessage } from '@sentry/sveltekit';
import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';

let mysqlConnection = null;

export function openMysqlConnection()	{
	if (!mysqlConnection)	{
		try {
			captureMessage('Creating new mysql connection');
			mysqlConnection = mysql.createConnection({
				host:  env.DB_HOST,
				user: env.DB_USER,
				port: env.DB_PORT,
				password: env.DB_PASSWORD,
				database: env.DB,
			});
			captureMessage('New mysql connection created');
		} catch (error) {
			captureException(error);
			throw new Error('Impossibile connettersi al database');
		}
	} else {
		captureMessage('Using old mysql connectino');
	}
	return mysqlConnection;
};