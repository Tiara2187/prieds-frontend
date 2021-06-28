import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVisitorsComponent } from './detail-visitors.component';

describe('DetailVisitorsComponent', () => {
  let component: DetailVisitorsComponent;
  let fixture: ComponentFixture<DetailVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
