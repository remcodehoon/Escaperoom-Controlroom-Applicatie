import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {HttpClient} from '@angular/common/http';
import {Session} from '../../shared/session';
import {environment} from '../../../environments/environment';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'eca-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  private session: Session;

  constructor(private sessionService: SessionService, private http: HttpClient) {

    // Inkomende sessie wijzigingen
    sessionService.getSessionObservable().subscribe(session => {
      this.session = session;
      console.log(session);
    });
  }

  ngOnInit() {
  }

  public toggle(): void {
    this.http.get<any>(environment.API_ALARM_OFF).subscribe(alarm => {});
  }

  public isCorrect(): boolean {
    return isNullOrUndefined(this.session) ? false : this.session.alarmCodeCorrect;
  }

}
