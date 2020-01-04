import { Component, OnInit } from '@angular/core';
import {Session} from '../../shared/session';
import {SessionService} from '../../services/session.service';
import {isNullOrUndefined} from 'util';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IOStats} from '../../shared/iostats';

@Component({
  selector: 'eca-sessie',
  templateUrl: './sessie.component.html',
  styleUrls: ['./sessie.component.scss']
})
export class SessieComponent implements OnInit {

  private session: Session;
  private ioStats: IOStats;

  constructor(private sessionService: SessionService, private http: HttpClient) {

    // Inkomende sessie wijzigingen
    sessionService.getSessionObservable().subscribe(session => {
      this.session = session;
    });

    sessionService.getIOStatsObservable().subscribe(stats => {
      this.ioStats = stats;
    });
  }

  ngOnInit() {
  }

  public isSessionActive(): boolean {
    return isNullOrUndefined(this.session) ? false : this.session.isActive;
  }

  public isSessionStopped(): boolean {
    return isNullOrUndefined(this.session) ? true : this.session.isStopped;
  }

  public isSessionStarted(): boolean {
    return isNullOrUndefined(this.session) ? false : !this.session.isStopped;
  }

  public isSessionSet(): boolean {
    return !isNullOrUndefined(this.session);
  }

  public getHours(): number {
    return isNullOrUndefined(this.session) ? 0 : this.session.hours;
  }

  public getMinutes(): number {
    return isNullOrUndefined(this.session) ? 0 : this.session.minutes;
  }

  public getSeconds(): number {
    return isNullOrUndefined(this.session) ? 0 : this.session.seconds;
  }

  public getTotalSecondsPlayed(): number {
    return isNullOrUndefined(this.session) ? 0 : this.session.elapsedTime;
  }

  public isSaved(): boolean {
    return isNullOrUndefined(this.session.isSaved) ? false : this.session.isSaved;
  }

  public getBuit(): number {
    return isNullOrUndefined(this.session) ? 0 : this.session.buit;
  }

  public getTeamName(): string {
    return isNullOrUndefined(this.session) ? '' : this.session.teamName;
  }

  public newSession(): void {
    if (!isNullOrUndefined(this.ioStats) && !this.ioStats.schakelkast) {
      const teamName = prompt('Geef een team naam:');
      if (teamName !== null && teamName !== undefined) {
        this.http.get<any>(environment.API_SESSION_NEW + teamName).subscribe(sessie => {});
      } else {
        alert('Geef een teamnaam op!');
      }
    } else {
      alert('Zet eerst alle pinnen van de schakelkast in de bruine kast omlaag, voordat je een nieuwe sessie start!');
    }
  }

  public stopSession(): void {
    this.http.get<any>(environment.API_SESSION_STOP).subscribe(sessie => {});

    const save = confirm('Wil je de sessie opslaan en op de website tonen?');
    if (save) {
      this.saveSession();
    }
  }

  public saveSession(): void {
    this.http.get<Session>(environment.API_SESSION_GET).subscribe(session => {
      if (session !== null) {
        this.session = session;
        this.http.post('https://www.stokperdje.nl/escaperoom_post.php', JSON.stringify(this.session)).subscribe(resp => {
          alert('Sessie opgeslagen!');
          this.session.isSaved = true;
        });
      }
    });
  }

}
