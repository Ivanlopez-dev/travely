import tsconfigPaths from 'vite-tsconfig-paths'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions
} from '@sentry/react-router'

const sentryConfig: SentryReactRouterBuildOptions = {
  org: 'minino-team',
  project: 'travely',
  // An auth token is required for uploading source maps.
  authToken:
    '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'
  // ...
}

export default defineConfig(config => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config)
    ],
    ssr: {
      noExternal: [/@syncfusion/]
    }
  }
})
