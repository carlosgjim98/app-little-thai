import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantSelectionPage } from './restaurant-selection.page';

describe('RestaurantSelectionPage', () => {
  let component: RestaurantSelectionPage;
  let fixture: ComponentFixture<RestaurantSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
