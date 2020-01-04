import {Log} from './log';

export interface Session {
  teamName?: string;
  buit: number;
  elapsedTime: number;
  hours: number;
  minutes: number;
  seconds: number;
  logs: Log[];
  buttonPressed: boolean;
  alarmCodeCorrect: boolean;
  isActive: boolean;
  isStopped: boolean;
  isSaved?: boolean;
}
