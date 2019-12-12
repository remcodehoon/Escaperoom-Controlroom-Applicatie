export interface TimeChange {
  type: 'SET' | 'MINUS' | 'PLUS' | 'RESET';
  hours: number;
  minutes: number;
  seconds: number;
}
