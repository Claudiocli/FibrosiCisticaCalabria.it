import * as Sentry from "@sentry/sveltekit";

Sentry.init({
  dsn: "https://70bc51984d664d5cb2e5471171802dc7@o4505442555527168.ingest.sentry.io/4505442809479168",
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions. Adjust this value in production as necessary.
});