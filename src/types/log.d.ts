type LogLevel = 'error' | 'warning' | 'info' | 'debug' | 'fatal';
export interface RequiredLog {
  MonitorId: number;
  Level: LogLevel;

  Stack?: string;
  Context?: string;
}
