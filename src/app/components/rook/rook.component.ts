import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'eca-rook',
  templateUrl: './rook.component.html',
  styleUrls: ['./rook.component.scss']
})
export class RookComponent implements OnInit {

  // Aan = true, Uit = false
  private status: boolean

  constructor(private sessionService: SessionService, private http: HttpClient) {
    this.sessionService.getIOStatsObservable().subscribe(iostats => {
      this.status = iostats.rookmachineStroom;
    });
  }

  ngOnInit() {
  }

  public togglePower(): void {
    if (this.status === false) {
      this.http.get<any>(environment.API_ROOK_ON).subscribe(rook => {});
    } else {
      this.http.get<any>(environment.API_ROOK_OFF).subscribe(rook => {});
    }
  }

  public toggleRook(): void {
    if (this.status === true) {
      this.http.get<any>(environment.API_ROOK_TOGGLE).subscribe(rook => {});
    }
  }

  public isAan(): boolean {
    return this.status;
  }

}
