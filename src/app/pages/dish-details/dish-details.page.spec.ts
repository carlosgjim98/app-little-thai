import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishDetailsPage } from './dish-details.page';

describe('DishDetailsPage', () => {
  let component: DishDetailsPage;
  let fixture: ComponentFixture<DishDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
