import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorationFormComponent } from './valoration-form.component';

describe('ValorationFormComponent', () => {
  let component: ValorationFormComponent;
  let fixture: ComponentFixture<ValorationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});