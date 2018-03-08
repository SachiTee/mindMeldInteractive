import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterialDesignComponent } from './ng-material-design.component';

describe('NgMaterialDesignComponent', () => {
  let component: NgMaterialDesignComponent;
  let fixture: ComponentFixture<NgMaterialDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaterialDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
