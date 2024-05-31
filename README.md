# LogSync Node

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install my-package-name
```

## Usage

```ts
import { LogApp } from 'log-sync-node';

const logAppInstance = new LogApp({
  MonitorKey: 'YOUR-MONITOR-KEY',
  API_URL: 'https://my-api.com/', // Default is: http://127.0.0.1:8080/
});
// Get your MonitorKey from the Monitor Settings page.
// RECOMMENDED: USE A SECURE SECRETS PROVIDER LIKE DOTENV FOR STORING THE KEY.

const id = await logApp.postLog({
  MonitorId: 1,
  Level: 'info',
  Context:
    'This is just a test, created by LogSync library - ' +
    new Date().toLocaleDateString(),
});
// If successful, the log has been sent to the server and viewable from your website.
```

## Disclaimer

This project requires a API for sending the Logs to a database. This project was made for custom purposes but may eventually in the future be released to the public. If you want to understand more we recommend that you checkout our Github Organization which should include more similar projects while allowing for discussions and contributors.

[build-img]: https://github.com/CodeVault-LLC/logsync-node/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/CodeVault-LLC/logsync-node/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/logsync-node
[downloads-url]: https://www.npmtrends.com/logsync-node
[npm-img]: https://img.shields.io/npm/v/logsync-node
[npm-url]: https://www.npmjs.com/package/logsync-node
[issues-img]: https://img.shields.io/github/issues/CodeVault-LLC/logsync-node
[issues-url]: https://github.com/CodeVault-LLC/logsync-node/issues
[codecov-img]: https://codecov.io/gh/CodeVault-LLC/logsync-node/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/CodeVault-LLC/logsync-node
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
