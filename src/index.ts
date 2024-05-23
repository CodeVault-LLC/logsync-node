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
  MonitorKey?: string | null;
};

export class LogApp {
  private API_URL: string;
  private MonitorKey: string | null;

  constructor(options: LogAppOptions = {}) {
    this.API_URL = options.API_URL || API_URL;
    this.MonitorKey = options.MonitorKey || null;
  }

  public setMonitorKey(monitorKey: string): void {
    this.MonitorKey = monitorKey;
  }

  public async postLog(log: RequiredLog): Promise<number> {
    this.check();

    return postLog(log, this.MonitorKey as string);
  }

  private check(): void {
    console.log(this.MonitorKey);

    if (!this.MonitorKey) {
      throw new Error('User key is not set');
    }
  }
}
