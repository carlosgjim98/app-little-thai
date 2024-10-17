import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThaiPointsPage } from './thai-points.page';

describe('ThaiPointsPage', () => {
  let component: ThaiPointsPage;
  let fixture: ComponentFixture<ThaiPointsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
