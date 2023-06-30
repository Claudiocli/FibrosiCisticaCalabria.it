import { sentrySvelteKit } from '@sentry/sveltekit';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		sentrySvelteKit(),
		sveltekit(),
		sentryVitePlugin({
			org: 'claudio-lucisano',
			project: 'lfcc-website',
			// Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
			// and need `project:releases` and `org:read` scopes
			// authToken: process.env.SENTRY_AUTH_TOKEN
			authToken: 'ec8fabe5ca104033bdb04d0e82c94ac2a216c045826d4e7c8592dfcbefa90dc7'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
