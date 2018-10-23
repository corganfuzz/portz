import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphcardsComponent } from './graphcards.component';

describe('GraphcardsComponent', () => {
  let component: GraphcardsComponent;
  let fixture: ComponentFixture<GraphcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
