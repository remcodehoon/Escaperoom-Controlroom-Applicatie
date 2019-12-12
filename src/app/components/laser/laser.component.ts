import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eca-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.scss']
})
export class LaserComponent implements OnInit {

  // Aan = true, Uit = false
  private aanStatus: boolean;

  constructor() {
    this.aanStatus = true;
  }

  ngOnInit() {
  }

  public toggle(): void {
    this.aanStatus = !this.aanStatus;
  }

  public isAan(): boolean {
    return this.aanStatus;
  }

}
