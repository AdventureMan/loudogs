import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LougearComponent } from './lougear.component';

describe('LougearComponent', () => {
  let component: LougearComponent;
  let fixture: ComponentFixture<LougearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LougearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LougearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
