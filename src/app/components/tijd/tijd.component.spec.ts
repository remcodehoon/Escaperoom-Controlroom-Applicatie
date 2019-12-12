import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TijdComponent } from './tijd.component';

describe('TijdComponent', () => {
  let component: TijdComponent;
  let fixture: ComponentFixture<TijdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TijdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TijdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
