import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCookingPage } from './order-cooking.page';

describe('OrderCookingPage', () => {
  let component: OrderCookingPage;
  let fixture: ComponentFixture<OrderCookingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
