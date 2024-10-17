import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedeemSaucePage } from './redeem-sauce.page';

describe('RedeemSaucePage', () => {
  let component: RedeemSaucePage;
  let fixture: ComponentFixture<RedeemSaucePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemSaucePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
