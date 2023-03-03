import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDescriptionComponent } from './exp-description.component';

describe('ExpDescriptionComponent', () => {
  let component: ExpDescriptionComponent;
  let fixture: ComponentFixture<ExpDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
