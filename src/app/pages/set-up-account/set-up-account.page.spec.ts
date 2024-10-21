import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetUpAccountPage } from './set-up-account.page';

describe('SetUpAccountPage', () => {
  let component: SetUpAccountPage;
  let fixture: ComponentFixture<SetUpAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
