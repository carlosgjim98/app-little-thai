import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuOnTablePage } from './menu-on-table.page';

describe('MenuOnTablePage', () => {
  let component: MenuOnTablePage;
  let fixture: ComponentFixture<MenuOnTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOnTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
