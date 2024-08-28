import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPluginsPage } from './test-plugins.page';

describe('TestPluginsPage', () => {
  let component: TestPluginsPage;
  let fixture: ComponentFixture<TestPluginsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPluginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
