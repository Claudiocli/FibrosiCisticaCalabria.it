export function load({cookies})	{
	const id = cookies.get('userid');

	if (!id)	{
		cookies.set('userid', crypto.randomUUID(), {path: '/login', expires: (new Date()).to});
	}

	return {};
};

export const actions = {
	createNewPost: async ({cookies, request}) => {
		const data = await request.formData();

		// TODO: send to db and create a new post, with `title` and `payload`
	}
};