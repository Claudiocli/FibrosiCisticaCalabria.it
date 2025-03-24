import { json } from '@sveltejs/kit';
import 'dotenv/config';

const APP_ID = process.env.FACEBOOK_APP_ID;
const APP_SECRET = process.env.FACEBOOK_APP_SECRET;

export async function GET() {
    const url = `https://graph.facebook.com/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Errore nel recupero del token');

        const data = await response.json();
        return json(data); // { access_token: "..." }
    } catch (error: any) {
        return json({ error: error.message }, { status: 500 });
    }
}