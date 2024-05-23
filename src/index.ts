import { API_URL } from './constants/constants';
import {
  deleteLog,
  fetchLog,
  fetchLogs,
  fetchLogsByProject,
  postLog,
} from './fetch/logs';
import { Log, RequiredLog } from './types/log';

type LogAppOptions = {
  API_URL?: string;
  UserKey?: string | null;
};

export class LogApp {
  private API_URL: string;
  private UserKey: string | null;

  constructor(options: LogAppOptions = {}) {
    this.API_URL = options.API_URL || API_URL;
    this.UserKey = options.UserKey || null;
  }

  public setUserKey(userKey: string): void {
    this.UserKey = userKey;
  }

  public async fetchLogs(): Promise<Log[]> {
    this.check();

    return fetchLogs(this.UserKey as string);
  }

  public async fetchLogsByProject(projectId: string): Promise<Log[]> {
    this.check();

    return fetchLogsByProject(projectId, this.UserKey as string);
  }

  public async postLog(log: RequiredLog): Promise<number> {
    this.check();

    return postLog(log, this.UserKey as string);
  }

  public async fetchLog(logId: number): Promise<Log> {
    this.check();

    return fetchLog(logId, this.UserKey as string);
  }

  public async deleteLog(logId: number): Promise<number> {
    this.check();

    return deleteLog(logId, this.UserKey as string);
  }

  private check(): void {
    if (!this.UserKey) {
      throw new Error('User key is not set');
    }
  }
}
