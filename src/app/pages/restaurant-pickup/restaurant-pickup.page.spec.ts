import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantPickupPage } from './restaurant-pickup.page';

describe('RestaurantPickupPage', () => {
  let component: RestaurantPickupPage;
  let fixture: ComponentFixture<RestaurantPickupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPickupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
