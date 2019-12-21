import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {SessionService} from '../../services/session.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'eca-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.scss']
})
export class LaserComponent implements OnInit {

  // Aan = true, Uit = false
  private aanStatus: boolean;

  constructor(private sessionService: SessionService, private http: HttpClient) {
    this.aanStatus = false;
    sessionService.getIOStatsObservable().subscribe(stats => {
      this.aanStatus = stats.lasers;
    });
  }

  ngOnInit() {
  }

  public toggle(): void {
    if (this.aanStatus === false) {
      this.http.get<any>(environment.API_LASERS_ON).subscribe(sessie => {});
    } else {
      this.http.get<any>(environment.API_LASERS_OFF).subscribe(sessie => {});
    }
  }

  public isAan(): boolean {
    return this.aanStatus;
  }

}
