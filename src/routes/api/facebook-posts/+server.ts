import { json } from '@sveltejs/kit';
import 'dotenv/config';

const PAGE_ID = process.env.FACEBOOK_PAGE_ID;

export async function GET() {
    try {
        const tokenRes = await fetch('/api/facebook-token');
        const tokenData = await tokenRes.json();
        const ACCESS_TOKEN = tokenData.access_token;

        const url = `https://graph.facebook.com/v22.0/${PAGE_ID}/posts?fields=message,created_time,full_picture,permalink_url&limit=4&access_token=${ACCESS_TOKEN}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Errore nel recupero dei post');

        const data = await response.json();
        return json(data.data);
    } catch (error: any) {
        return json({ error: error.message }, { status: 500 });
    }
}
