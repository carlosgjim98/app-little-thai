import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmAddressPage } from './confirm-address.page';

describe('ConfirmAddressPage', () => {
  let component: ConfirmAddressPage;
  let fixture: ComponentFixture<ConfirmAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
