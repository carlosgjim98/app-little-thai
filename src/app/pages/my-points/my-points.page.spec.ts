import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPointsPage } from './my-points.page';

describe('MyPointsPage', () => {
  let component: MyPointsPage;
  let fixture: ComponentFixture<MyPointsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
