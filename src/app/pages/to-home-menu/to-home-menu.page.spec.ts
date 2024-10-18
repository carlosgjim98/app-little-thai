import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToHomeMenuPage } from './to-home-menu.page';

describe('ToHomeMenuPage', () => {
  let component: ToHomeMenuPage;
  let fixture: ComponentFixture<ToHomeMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToHomeMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
