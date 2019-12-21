import { IOStats } from './../shared/iostats';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Session} from '../shared/session';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Subscription} from 'rxjs';
import {Message} from '@stomp/stompjs';
import {TimeChange} from '../shared/TimeChange';
import {Log} from '../shared/log';
import {Status} from '../shared/status';
import {Buit} from '../shared/buit';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // Observable string sources
  private sessionSource = new Subject<Session>();
  private logSource = new Subject<Log>();
  private pinslotSource = new Subject<Status>();
  private laserSource = new Subject<Status>();
  private ioStatsSource = new Subject<IOStats>();

  private timeSubscribtion: Subscription;
  private sessionSubscribtion: Subscription;
  private logSubscribtion: Subscription;
  private pinslotSubscribtion: Subscription;
  private laserSubscribtion: Subscription;
  private ioStatsSubscribtion: Subscription;
  private buitSubscribtion: Subscription;

  private session: Session;

  constructor(private http: HttpClient, private rxStompService: RxStompService) {
    http.get<Session>(environment.API_SESSION_GET).subscribe(session => {
      if (session !== null) {
        this.session = session;
        this.sessionSource.next(session);
      }
    });

    http.get<IOStats>(environment.API_IOSTATS_GET).subscribe(stats => {
      if (stats !== null) {
        this.ioStatsSource.next(stats);
      }
    });

    http.get<Status>(environment.API_PINSLOT_GET).subscribe(status => {
      this.pinslotSource.next(status);
    });

    this.timeSubscribtion = this.rxStompService.watch(environment.WS_TIME_TOPIC).subscribe((message: Message) => {
      const change: TimeChange = JSON.parse(message.body);
      if (this.session !== null && this.session !== undefined) {
        switch (change.type) {
          case 'SET':
            this.session.hours = change.hours;
            this.session.minutes = change.minutes;
            this.session.seconds = change.seconds;
            break;
          case 'PLUS':
            this.session.hours += change.hours;
            this.session.minutes += change.minutes;
            this.session.seconds += change.seconds;
            break;
          case 'MINUS':
            this.session.hours -= change.hours;
            this.session.minutes -= change.minutes;
            this.session.seconds -= change.seconds;
            break;
          case 'RESET':
            this.session.hours = 1;
            this.session.minutes = 0;
            this.session.seconds = 0;
            break;
          default:
            break;
        }
        this.sessionSource.next(this.session);
      }
    });

    this.sessionSubscribtion = this.rxStompService.watch(environment.WS_SESSION_TOPIC).subscribe((message: Message) => {
      const session: Session = JSON.parse(message.body);
      this.session = session;
      this.sessionSource.next(session);
    });

    this.logSubscribtion = this.rxStompService.watch(environment.WS_LOG_TOPIC).subscribe((message: Message) => {
      const log: Log = JSON.parse(message.body);
      this.logSource.next(log);
    });

    this.pinslotSubscribtion = this.rxStompService.watch(environment.WS_PINSLOT_TOPIC).subscribe((message: Message) => {
      const status: Status = JSON.parse(message.body);
      this.pinslotSource.next(status);
    });

    this.laserSubscribtion = this.rxStompService.watch(environment.WS_LASER_TOPIC).subscribe((message: Message) => {
      const status: Status = JSON.parse(message.body);
      this.laserSource.next(status);
    });

    this.ioStatsSubscribtion = this.rxStompService.watch(environment.WS_IOSTATS_TOPIC).subscribe((message: Message) => {
      const stats: IOStats = JSON.parse(message.body);
      this.ioStatsSource.next(stats);
    });

    this.buitSubscribtion = this.rxStompService.watch(environment.WS_BUIT_TOPIC).subscribe((message: Message) => {
      const buit: Buit = JSON.parse(message.body);
      this.session.buit = buit.totaleBuit;
      this.sessionSource.next(this.session);
    });
  }

  public getSessionObservable(): Observable<Session> {
    return this.sessionSource.asObservable();
  }

  public getLogObservable(): Observable<Log> {
    return this.logSource.asObservable();
  }

  public getLaserObservable(): Observable<Status> {
    return this.laserSource.asObservable();
  }

  public getPinslotObservable(): Observable<Status> {
    return this.pinslotSource.asObservable();
  }

  public getIOStatsObservable(): Observable<IOStats> {
    return this.ioStatsSource.asObservable();
  }
}
