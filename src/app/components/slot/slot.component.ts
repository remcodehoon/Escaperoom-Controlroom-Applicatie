import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {HttpClient} from '@angular/common/http';
import {Session} from '../../shared/session';
import {environment} from '../../../environments/environment';
import {isNullOrUndefined} from 'util';
import {IOStats} from '../../shared/iostats';

@Component({
  selector: 'eca-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  private ioStats: IOStats;

  constructor(private sessionService: SessionService, private http: HttpClient) {
    sessionService.getIOStatsObservable().subscribe(stats => {
      this.ioStats = stats;
    });
  }

  ngOnInit() {
  }

  public open(): void {
    this.http.get<any>(environment.API_OPEN_LOCK).subscribe(sessie => {});
  }

  public close(): void {
    this.http.get<any>(environment.API_CLOSE_LOCK).subscribe(sessie => {});
  }

  public isOpen(): boolean {
    return !this.ioStats.slot3V;
  }

}
