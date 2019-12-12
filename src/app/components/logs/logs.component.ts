import { Component, OnInit } from '@angular/core';
import {Log} from '../../shared/log';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'eca-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  private logs: Log[];

  constructor(private sessionService: SessionService) {
    this.logs = [];

    sessionService.getSessionObservable().subscribe(session => {
      this.setLogs(session.logs);
    });

    sessionService.getLogObservable().subscribe(log => {
      this.addLog(log);
    });
  }

  ngOnInit() {
  }

  public getLogs(): Log[] {
    return this.logs;
  }

  public setLogs(logs: Log[]) {
    this.logs = logs;
  }

  public addLog(log: Log): void {
    this.logs.unshift(log);
  }
}
