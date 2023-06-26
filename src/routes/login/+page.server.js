import {hashSync, compareSync} from ('bcrypt');

export const actions = {
	login: async ({cookies, request}) => {
		const data = request.formData();

		const username = data.get('username');
		const pwd = hashSync(data.get('password'), 10);

		// TODO: get username and pwd from db
		const uname_db;
		const pwd_db;

		if (compareSync(pwd_db, pwd))	{
			// Pwd match
		} else {
			// Error
			
		}
	}
};