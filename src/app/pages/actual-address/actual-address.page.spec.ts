import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualAddressPage } from './actual-address.page';

describe('ActualAddressPage', () => {
  let component: ActualAddressPage;
  let fixture: ComponentFixture<ActualAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
