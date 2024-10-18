import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDeliveredPage } from './order-delivered.page';

describe('OrderDeliveredPage', () => {
  let component: OrderDeliveredPage;
  let fixture: ComponentFixture<OrderDeliveredPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
