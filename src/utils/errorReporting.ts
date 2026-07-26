import type { ComponentType } from 'react';
import * as Sentry from '@sentry/react-native';

// Get this from sentry.io: create a free account, add a React Native
// project, then Settings > Client Keys (DSN). A Sentry DSN is meant to be
// embedded in client apps (unlike an API secret), so committing it here once
// set is fine. Left blank until then — everything below no-ops without it,
// so the app runs the same whether or not this is set.
const SENTRY_DSN = '';

export function initErrorReporting() {
  if (!SENTRY_DSN) return;
  Sentry.init({ dsn: SENTRY_DSN });
}

/** Wraps the no-props root component to report crashes/errors, only once a DSN is configured above. */
export function wrapWithErrorReporting(Root: ComponentType<Record<string, never>>) {
  return SENTRY_DSN ? Sentry.wrap(Root) : Root;
}
