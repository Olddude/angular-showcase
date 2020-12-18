export enum Cars {
  Honda = 'Honda',
  BMW = 'BMW',
  MercedesBenz = 'MercedesBenz'
}

export enum Students {
  Mark = 'Mark',
  Jenny = 'Jenny',
  Richard = 'Richard'
}

export enum LogLevels {
  Trace,
  Debug,
  Info,
  Warning,
  Error
}

export enum Environment {
  SYSTEMINFO = 'WINDOWS_NT',
  NODE_ENV = 'DEVELOPMENT'
}

export interface Case {
  name: string;
  options: any;
  selected: any;
}
