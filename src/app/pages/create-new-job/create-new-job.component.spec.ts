import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewJobComponent } from './create-new-job.component';

describe('CreateNewJobComponent', () => {
  let component: CreateNewJobComponent;
  let fixture: ComponentFixture<CreateNewJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewJobComponent]
    });
    fixture = TestBed.createComponent(CreateNewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
