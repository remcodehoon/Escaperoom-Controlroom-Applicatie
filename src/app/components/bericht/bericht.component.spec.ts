import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerichtComponent } from './bericht.component';

describe('BerichtComponent', () => {
  let component: BerichtComponent;
  let fixture: ComponentFixture<BerichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
