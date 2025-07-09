import { ResourceRegisterFormComponent } from './resource-register-form.component'

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ResourceRegisterFormComponent', () => {
  let component: ResourceRegisterFormComponent;
  let fixture: ComponentFixture<ResourceRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceRegisterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});