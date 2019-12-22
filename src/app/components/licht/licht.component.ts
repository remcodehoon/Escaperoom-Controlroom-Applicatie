import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'eca-licht',
  templateUrl: './licht.component.html',
  styleUrls: ['./licht.component.scss']
})
export class LichtComponent implements OnInit {

  // Aan = true, Uit = false
  private status: boolean

  constructor(private sessionService: SessionService, private http: HttpClient) {
    this.sessionService.getIOStatsObservable().subscribe(iostats => {
      this.status = iostats.verlichting;
    });
  }

  ngOnInit() {
  }

  public toggle(): void {
    if (this.status === false) {
      this.http.get<any>(environment.API_LIGHTS_ON).subscribe(lights => {});
    } else {
      this.http.get<any>(environment.API_LIGHTS_OFF).subscribe(lights => {});
    }
  }

  public isAan(): boolean {
    return this.status;
  }

}
