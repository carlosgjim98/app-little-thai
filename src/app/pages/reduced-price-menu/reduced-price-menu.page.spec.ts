import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReducedPriceMenuPage } from './reduced-price-menu.page';

describe('ReducedPriceMenuPage', () => {
  let component: ReducedPriceMenuPage;
  let fixture: ComponentFixture<ReducedPriceMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducedPriceMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
