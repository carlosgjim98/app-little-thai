import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImageViewPage } from './image-view.page';

describe('ImageViewPage', () => {
  let component: ImageViewPage;
  let fixture: ComponentFixture<ImageViewPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ImageViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
