import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Dimensions, ImageCroppedEvent, ImageCropperComponent, ImageTransform } from 'ngx-image-cropper';

import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-crop',
  templateUrl: './photo-crop.page.html',
  styleUrls: ['./photo-crop.page.scss'],
})
export class PhotoCropPage implements OnInit {

  public fileToUpload: any;
  public imagen:any;
  title = 'my-image-cropper';
  @ViewChild('myInput') myInputVariable!: ElementRef;
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  public aspectRatio = 4/3;
  public aspectRatioUndefined: boolean = false;
  
  public phone: boolean = false;

  constructor(
    public auth: AuthenticationService,
    public route: ActivatedRoute,
    private navParams: NavParams,
    private modalController: ModalController

   ){
    this.imagen = this.navParams.data['base64img'];
    this.phone = this.navParams.data['phone'];

    if(this.navParams.data['aspectRatio']){
      this.aspectRatio = this.navParams.data['aspectRatio'];
    }else{
      this.aspectRatioUndefined = true;
    }

   }

   ngOnInit() { }
  

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    
    this.croppedImage = event.blob;

    const file = new File([this.croppedImage], 'image.jpg', { type: 'image/jpeg' });

    this.fileToUpload = file;
  
    if(this.phone){      
      this.fileToUpload = event.blob;
      this.modalController.dismiss({
        objUrl: event.objectUrl,
        file: this.fileToUpload
      }, 'file');
    }else{
      this.modalController.dismiss(this.fileToUpload, 'file');
    }
 
  }
  imageLoaded() {
    this.showCropper = true;
  }
  cropperReady(sourceImageDimensions: Dimensions) {
  }
  loadImageFailed() {
  }

  clear() {
    this.croppedImage = '';
    this.imageChangedEvent = '';
    this.myInputVariable.nativeElement.value = '';
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH,
    };
  }

  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH,
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV,
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  zoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation(event) {    
    this.rotation = event.detail.value;
    this.transform = {
      ...this.transform,
      rotate: this.rotation,
    };
  }

  back(){
    this.modalController.dismiss(null, 'dismiss');
  }


  public async adjuntarImagen() {
    this.imageCropper.crop()
  }


}
