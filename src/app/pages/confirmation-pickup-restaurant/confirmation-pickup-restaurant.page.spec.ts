import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPickupRestaurantPage } from './confirmation-pickup-restaurant.page';

describe('ConfirmationPickupRestaurantPage', () => {
  let component: ConfirmationPickupRestaurantPage;
  let fixture: ComponentFixture<ConfirmationPickupRestaurantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPickupRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
