import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobsComponent } from './my-jobs.component';

describe('MyJobsComponent', () => {
  let component: MyJobsComponent;
  let fixture: ComponentFixture<MyJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyJobsComponent]
    });
    fixture = TestBed.createComponent(MyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
