import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IOStats} from '../../shared/iostats';

@Component({
  selector: 'eca-iostats',
  templateUrl: './iostats.component.html',
  styleUrls: ['./iostats.component.scss']
})
export class IOStatsComponent {

  private ioStats: IOStats;

}
