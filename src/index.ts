import type { RequiredLog } from './types/log';
import fetch from 'node-fetch';
import { API_URL } from './constants/constants';

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

    const response = await fetch(`${API_URL}logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Monitor-Key': this.MonitorKey || '',
      },
      body: JSON.stringify(log),
    });

    const id = (await response.json()) as number;

    return id;
  }

  private check(): void {
    if (!this.MonitorKey) {
      throw new Error('User key is not set');
    }
  }
}
