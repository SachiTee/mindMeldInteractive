import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPatternLibraryComponent } from './bootstrap-pattern-library.component';

describe('BootstrapPatternLibraryComponent', () => {
  let component: BootstrapPatternLibraryComponent;
  let fixture: ComponentFixture<BootstrapPatternLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPatternLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPatternLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
