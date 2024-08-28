import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCropPage } from './photo-crop.page';

describe('PhotoCropPage', () => {
  let component: PhotoCropPage;
  let fixture: ComponentFixture<PhotoCropPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
