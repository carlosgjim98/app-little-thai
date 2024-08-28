import { Component, OnInit, ViewChild } from '@angular/core';
import { PinchZoomComponent } from '@meddv/ngx-pinch-zoom';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.page.html',
  styleUrls: ['./image-view.page.scss'],
})
export class ImageViewPage implements OnInit {
  @ViewChild('pinch') pinchZoom: PinchZoomComponent;

  public image: string;
  public video: string;
  constructor() { }

  ngOnInit() {
    if (history.state.image == null) {
      this.video = history.state.video
    } else {
      this.image = history.state.image;
    }
  }



}
