import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalsListPage } from './locals-list.page';

describe('LocalsListPage', () => {
  let component: LocalsListPage;
  let fixture: ComponentFixture<LocalsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
