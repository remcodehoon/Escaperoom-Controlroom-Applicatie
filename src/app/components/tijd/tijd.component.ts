import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {Session} from '../../shared/session';
import {isNullOrUndefined} from 'util';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'eca-tijd',
  templateUrl: './tijd.component.html',
  styleUrls: ['./tijd.component.scss']
})
export class TijdComponent implements OnInit {

  private session: Session;

  constructor(private sessionService: SessionService, private http: HttpClient) {

    // Listen for session changes / set
    this.sessionService.getSessionObservable().subscribe(session => {
      this.session = session;
    });
  }

  ngOnInit() {
  }

  public isSessionActive(): boolean {
    return isNullOrUndefined(this.session) ? false : this.session.isActive;
  }

  public isSessionStopped(): boolean {
    return isNullOrUndefined(this.session) ? false : this.session.isStopped;
  }

  public isSessionStarted(): boolean {
    return isNullOrUndefined(this.session) ? false : !this.session.isStopped;
  }

  public isSessionSet(): boolean {
    return !isNullOrUndefined(this.session);
  }

  public setTijd(): void {
    const uren = prompt('Uren:');
    const minuten = prompt('Minuten:');
    const seconden = prompt('Seconden:');

    this.http.get<any>(environment.API_TIME_SET + uren + '/' + minuten + '/' + seconden).subscribe(session => {});
  }

  public addTime(): void {
    const minuten = prompt('Minuten:');
    const seconden = prompt('Seconden:');

    this.http.get<any>(environment.API_TIME_PLUS + '0/' + minuten + '/' + seconden).subscribe(session => {});
  }

  public minTime(): void {
    const minuten = prompt('Minuten:');
    const seconden = prompt('Seconden:');

    this.http.get<any>(environment.API_TIME_MINUS + '0/' + minuten + '/' + seconden).subscribe(session => {});
  }

  public startSession(): void {
    if (this.session.isActive) {
      this.http.get<any>(environment.API_SESSION_RESUME).subscribe(session => {});
    } else {
      this.http.get<any>(environment.API_SESSION_START).subscribe(session => {});
    }
  }

  public pauseSession(): void {
    this.http.get<any>(environment.API_SESSION_PAUSE).subscribe(session => {});
  }

}
