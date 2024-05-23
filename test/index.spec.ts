import { LogApp } from '../src/index';
import { config } from 'dotenv';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
config();

const { EXAMPLE_MONITOR_KEY } = process.env;

describe('user tests', () => {
  const logApp = new LogApp({
    MonitorKey: EXAMPLE_MONITOR_KEY || null,
  });

  it('It should post a log', async () => {
    const id = await logApp.postLog({
      MonitorId: 1,
      Stack: `Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'report-sample' 'self' https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtag/js assets.codepen.io production-assets.codepen.io https://js.stripe.com 'sha256-uogddBLIKmJa413dyT0iPejBg3VFcO+4x6B+vw3jng0=' 'sha256-EehWlTYp7Bqy57gDeQttaWKp0ukTTEUKGP44h8GVeik='".

    at new Function (<anonymous>)
    at <anonymous>:1:7`,
      Type: 'error',
    });

    expect(id).toBeDefined();
  });
});
