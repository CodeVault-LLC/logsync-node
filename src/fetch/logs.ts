/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { API_URL } from '../constants/constants';
import type { Log, RequiredLog } from '../types/log';
import fetch from 'node-fetch';
import type { Response } from 'node-fetch';

/**
 * Fetch logs by project from the server
 * @param projectId
 * @returns an array of logs
 */
export const fetchLogsByProject = async (
  projectId: string,
  userKey: string
): Promise<Log[]> => {
  const response: Response = await fetch(
    `${API_URL}logs/project/${projectId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userKey}`,
      },
    }
  );

  const logs = (await response.json()) as Log[];

  return logs;
};

/**
 * Fetch logs from the server
 * @returns an array of logs
 */
export const fetchLogs = async (userKey: string): Promise<Log[]> => {
  const response = await fetch(`${API_URL}logs`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userKey}`,
    },
  });

  const logs = (await response.json()) as Log[];

  return logs;
};

/**
 * Post a log to the server
 * @param log
 * @returns the id of the log
 */
export const postLog = async (
  log: RequiredLog,
  userKey: string
): Promise<number> => {
  const response = await fetch(`${API_URL}logs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userKey}`,
    },
    body: JSON.stringify(log),
  });

  const id = (await response.json()) as number;

  return id;
};

export const fetchLog = async (
  logId: number,
  userKey: string
): Promise<Log> => {
  const response = await fetch(`${API_URL}logs/${logId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userKey}`,
    },
  });

  const logs = (await response.json()) as Log;

  return logs;
};

export const deleteLog = async (
  logId: number,
  userKey: string
): Promise<number> => {
  const response = await fetch(`${API_URL}logs/${logId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userKey}`,
    },
  });

  const id = (await response.json()) as number;

  return id;
};
