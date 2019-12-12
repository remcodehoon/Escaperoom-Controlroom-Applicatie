import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {HttpClient} from '@angular/common/http';
import {Session} from '../../shared/session';
import {environment} from '../../../environments/environment';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'eca-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  // Open = false, Dicht = true
  private status: boolean

  constructor(private sessionService: SessionService, private http: HttpClient) {
    // Inkomende sessie wijzigingen
    sessionService.getPinslotObservable().subscribe(status => {
      this.status = status.status;
    });
  }

  ngOnInit() {
  }

  public toggle(): void {
    if (this.status === false) {
      this.http.get<any>(environment.API_CLOSE_LOCK).subscribe(sessie => {});
    } else {
      this.http.get<any>(environment.API_OPEN_LOCK).subscribe(sessie => {});
    }
  }

  public isOpen(): boolean {
    return !this.status;
  }

}
