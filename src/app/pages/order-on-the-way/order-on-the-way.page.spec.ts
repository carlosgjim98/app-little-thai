import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderOnTheWayPage } from './order-on-the-way.page';

describe('OrderOnTheWayPage', () => {
  let component: OrderOnTheWayPage;
  let fixture: ComponentFixture<OrderOnTheWayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOnTheWayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
