import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPickupDeliveryPage } from './confirmation-pickup-delivery.page';

describe('ConfirmationPickupDeliveryPage', () => {
  let component: ConfirmationPickupDeliveryPage;
  let fixture: ComponentFixture<ConfirmationPickupDeliveryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPickupDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
