import { SessionService } from './../../services/session.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IOStats} from '../../shared/iostats';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'eca-iostats',
  templateUrl: './iostats.component.html',
  styleUrls: ['./iostats.component.scss']
})
export class IOStatsComponent {

  private ioStats: IOStats;

  constructor(private sessionService: SessionService) {
    sessionService.getIOStatsObservable().subscribe(stats => {
      this.ioStats = stats;
    });
  }

  public isDrukknopLEDOn() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.drukknopLED;
  }

  public isSchakelkastCorrect() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.schakelkast;
  }

  public isRookPowered() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.rookmachineStroom;
  }

  public isRookToggled() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.rookmachineToggle;
  }

  public lockHas12V() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.slot12V;
  }

  public lockHas3V() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.slot3V;
  }

  public isSensor1Onderbroken() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.sensor1;
  }

  public isSensor2Onderbroken() {
    return isNullOrUndefined(this.ioStats) ? false : this.ioStats.sensor2;
  }

}
