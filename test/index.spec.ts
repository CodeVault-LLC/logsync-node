import { LogApp } from '../src/index';
import { config } from 'dotenv';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
config();

const { EXAMPLE_PROJECT_ID, EXAMPLE_USER_KEY } = process.env;

describe('index', () => {
  describe('LogApp', () => {
    it('It should fail if no UserKey is provided', () => {
      const logApp = new LogApp();

      expect(() => {
        void logApp.fetchLogs();
      }).toThrow();
    });
  });
});

describe('user tests', () => {
  describe('LogApp', () => {
    const logApp = new LogApp({
      UserKey: EXAMPLE_USER_KEY,
    });

    describe('handle logs', () => {
      it('should return an array of logs', async () => {
        const logs = await logApp.fetchLogs();
        expect(logs).toBeInstanceOf(Array);
      });

      let logId: number;

      it('post a new log', async () => {
        const logs = await logApp.fetchLogs();
        const logCount = logs.length;
        const response = await logApp.postLog({
          message: 'This is a test log',
          errorCode: 'TEST',
          fileName: 'index.spec.ts',
          functionName: 'postLog',
          lineNumber: 1,
          projectId: Number(EXAMPLE_PROJECT_ID),

          stackTrace: 'This is a test stack trace',
          type: 'TEST',
        });
        const newLogs = await logApp.fetchLogs();
        logId = response;
        expect(newLogs.length).toBe(logCount + 1);
      });

      it('should return an array of logs by project', async () => {
        const logs = await logApp.fetchLog(logId);
        expect(logs).toBeInstanceOf(Object);
      });

      it('remove the log', async () => {
        void logApp.deleteLog(logId);

        const newLog = await logApp.fetchLog(logId);

        expect(newLog.deletedAt).not.toBe(null);
      });
    });
  });
});
