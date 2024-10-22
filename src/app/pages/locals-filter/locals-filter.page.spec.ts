import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalsFilterPage } from './locals-filter.page';

describe('LocalsFilterPage', () => {
  let component: LocalsFilterPage;
  let fixture: ComponentFixture<LocalsFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalsFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
