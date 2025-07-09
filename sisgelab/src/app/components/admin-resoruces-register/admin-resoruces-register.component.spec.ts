import { AdminResorucesRegisterComponent } from './admin-resoruces-register.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AdminResorucesRegisterComponent', () => {
  let component: AdminResorucesRegisterComponent;
  let fixture: ComponentFixture<AdminResorucesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminResorucesRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminResorucesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});