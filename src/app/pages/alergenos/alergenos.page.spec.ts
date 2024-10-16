import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlergenosPage } from './alergenos.page';

describe('AlergenosPage', () => {
  let component: AlergenosPage;
  let fixture: ComponentFixture<AlergenosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
