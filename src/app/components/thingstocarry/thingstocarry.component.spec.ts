import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingstocarryComponent } from './thingstocarry.component';

describe('ThingstocarryComponent', () => {
  let component: ThingstocarryComponent;
  let fixture: ComponentFixture<ThingstocarryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingstocarryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingstocarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
