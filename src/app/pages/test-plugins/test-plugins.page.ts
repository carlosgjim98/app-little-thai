import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FileOpener, FileOpenerOptions } from '@capacitor-community/file-opener';

@Component({
  selector: 'app-test-plugins',
  templateUrl: './test-plugins.page.html',
  styleUrls: ['./test-plugins.page.scss'],
})
export class TestPluginsPage implements OnInit {

  public crop : boolean = false;
  public multipleFiles : boolean = false;

  public fileImage:any;
  public fileVideo:any;
  public files:any;


  constructor(
    private utilities: UtilitiesService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    
  }


  public geFilesUtilities(){
    this.utilities.adjuntarArchivos(this.multipleFiles ? 0 : 1).then((response)=>{
      console.log("RESPONSE ADJUNTAR FILES", response);
      this.files = response;
    })
  }

  public getVideoUtilities(){
    this.utilities.adjuntarVideo().then((response)=>{
      console.log("RESPONSE ADJUNTAR VIDEO", response);
      this.fileVideo = response;
    })
  }

  public getImageFileUtilities(){
    this.utilities.adjuntarImagen(this.crop).then((response)=>{
      console.log("RESPONSE ADJUNTAR IMAGEN", response);

      this.fileImage = response;
    })
  }

  public getImageCameraUtilities(){
    this.utilities.adjuntarImagenCamera(this.crop).then((response)=>{
      console.log("RESPONSE ADJUNTAR IMAGEN CAMERA", response);
      this.fileImage = response;

    })
    
  }


  public openModalViewImage(){
    this.utilities.openImageUrl(this.fileImage.url);
  }

  
  public openModalViewVideo(){
    this.utilities.openVideoUrl(this.fileVideo.url);
  }

}
