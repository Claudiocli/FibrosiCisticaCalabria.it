import * as Sentry from "@sentry/sveltekit";

Sentry.init({
  dsn: "https://70bc51984d664d5cb2e5471171802dc7@o4505442555527168.ingest.sentry.io/4505442809479168",
  // Performance Monitoring:
  tracesSampleRate: 1.0, // Capture 100% of the transactions. Adjust this value in production as necessary.
  // Session Replay
  integrations: [new Sentry.Replay()],
  replaysSessionSampleRate: 0.1, // This sets the Replay sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});