import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusiveComponent } from './inclusive.component';

describe('InclusiveComponent', () => {
  let component: InclusiveComponent;
  let fixture: ComponentFixture<InclusiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
