import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EulasPage } from './eulas.page';

describe('EulasPage', () => {
  let component: EulasPage;
  let fixture: ComponentFixture<EulasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
