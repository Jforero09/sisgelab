import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedResourcesTableComponent } from './booked-resources-table.component';

describe('BookedResourcesTableComponent', () => {
  let component: BookedResourcesTableComponent;
  let fixture: ComponentFixture<BookedResourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedResourcesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedResourcesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});