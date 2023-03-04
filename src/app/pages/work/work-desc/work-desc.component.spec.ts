import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDescComponent } from './work-desc.component';

describe('WorkDescComponent', () => {
  let component: WorkDescComponent;
  let fixture: ComponentFixture<WorkDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
