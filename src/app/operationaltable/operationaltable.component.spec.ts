import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationaltableComponent } from './operationaltable.component';

describe('OperationaltableComponent', () => {
  let component: OperationaltableComponent;
  let fixture: ComponentFixture<OperationaltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationaltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationaltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
