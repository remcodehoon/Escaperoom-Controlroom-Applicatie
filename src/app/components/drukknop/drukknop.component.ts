import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {Session} from '../../shared/session';
import {isNullOrUndefined} from 'util';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'eca-drukknop',
  templateUrl: './drukknop.component.html',
  styleUrls: ['./drukknop.component.scss']
})
export class DrukknopComponent implements OnInit {

  private session: Session;

  constructor(private sessionService: SessionService, private http: HttpClient) {
    sessionService.getSessionObservable().subscribe(session => {
      this.session = session;
    });
  }

  ngOnInit() {
  }

  public toggle(): void {
    if (confirm('Weet je zeker dat je de knop in wil drukken? Dit kun je niet ongedaan maken!')) {
      this.http.get<any>(environment.API_DRUKKNOP_PRESS).subscribe(knop => {});
    }
  }

  public isIngedrukt(): boolean {
    return isNullOrUndefined(this.session) ? false : this.session.buttonPressed;
  }
}
