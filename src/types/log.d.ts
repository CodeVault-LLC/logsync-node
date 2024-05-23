export interface Log {
  id: number;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  projectId: number;

  type: string;
  errorCode: string;
  message: string;

  lineNumber: number;
  fileName: string;
  functionName: string;

  stackTrace: string;
}

export interface RequiredLog {
  projectId: number;

  type: string;
  errorCode: string;
  message: string;

  lineNumber: number;
  fileName: string;
  functionName: string;

  stackTrace: string;
}
