import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartWithAddressPage } from './start-with-address.page';

describe('StartWithAddressPage', () => {
  let component: StartWithAddressPage;
  let fixture: ComponentFixture<StartWithAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWithAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
