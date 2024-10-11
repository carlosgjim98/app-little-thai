import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToHomePage } from './to-home.page';

describe('ToHomePage', () => {
  let component: ToHomePage;
  let fixture: ComponentFixture<ToHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
