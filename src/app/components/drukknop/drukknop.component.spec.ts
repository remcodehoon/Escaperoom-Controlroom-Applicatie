import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrukknopComponent } from './drukknop.component';

describe('DrukknopComponent', () => {
  let component: DrukknopComponent;
  let fixture: ComponentFixture<DrukknopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrukknopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrukknopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
