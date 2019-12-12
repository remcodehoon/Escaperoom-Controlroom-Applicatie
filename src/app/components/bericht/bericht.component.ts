import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'eca-bericht',
  templateUrl: './bericht.component.html',
  styleUrls: ['./bericht.component.scss']
})
export class BerichtComponent implements OnInit {

  public message = '';
  public currentmessage = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  plaatsBericht() {
    this.http.get<any>(environment.API_SHOW_MESSAGE + this.message).subscribe(session => {});
    this.currentmessage = this.message;
    this.message = '';
  }

  verbergBericht() {
    this.http.get<any>(environment.API_HIDE_MESSAGE).subscribe(session => {});
    this.currentmessage = '';
  }

}
