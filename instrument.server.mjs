import * as Sentry from '@sentry/react-router'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: 'https://6e78b27d10c0066774e4077fe9fda4ce@o4509526653403136.ingest.de.sentry.io/4509526655500368',

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  profilesSampleRate: 1.0 // profile every transaction
})
