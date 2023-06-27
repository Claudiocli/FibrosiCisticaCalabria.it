import mysql from 'mysql2/promise';

let mysqlConnection = null;

export function openMysqlConnection()	{
	if (!mysqlConnection)	{
		try {
			mysqlConnection = mysql.createConnection({
				// TODO: consider to put info in a .env file
				user: 'Sql831063@62.149.186.129',
				port: 3306,
				password: 'Dando2023!',
				database: 'Sql831063_2'
			});
		} catch (error) {
			// TODO: loggare l'errore
			throw new Error('Impossibile connettersi al database');
		}
	}
	return mysqlConnection;
};