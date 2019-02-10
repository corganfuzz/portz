import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotetableComponent } from './remotetable.component';

describe('RemotetableComponent', () => {
  let component: RemotetableComponent;
  let fixture: ComponentFixture<RemotetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemotetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
