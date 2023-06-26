
export function load({cookies})	{
	const id = cookeis.get('userid');

	if (!id)	{
		cookies.set('userid', crypto.randomUUID(), {path: '/login'});
	}

	return {};
};

export const actions = {
	createNewPost: async ({cookies, request}) => {
		const data = await request.formData();
	}
};