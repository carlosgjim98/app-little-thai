import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentAddressPage } from './current-address.page';

describe('CurrentAddressPage', () => {
  let component: CurrentAddressPage;
  let fixture: ComponentFixture<CurrentAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
