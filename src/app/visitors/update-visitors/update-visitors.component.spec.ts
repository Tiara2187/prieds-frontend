import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitorsComponent } from './update-visitors.component';

describe('UpdateVisitorsComponent', () => {
  let component: UpdateVisitorsComponent;
  let fixture: ComponentFixture<UpdateVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
