import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressComponentComponent } from './circle-progress-component.component';

describe('CircleProgressComponentComponent', () => {
  let component: CircleProgressComponentComponent;
  let fixture: ComponentFixture<CircleProgressComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleProgressComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleProgressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
