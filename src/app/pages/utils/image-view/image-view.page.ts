import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimationController, Gesture, GestureController, ModalController, NavParams } from '@ionic/angular';
import { PinchZoomComponent } from '@meddv/ngx-pinch-zoom';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.page.html',
  styleUrls: ['./image-view.page.scss'],
})
export class ImageViewPage implements OnInit {
  @ViewChild('pinch') pinchZoom: PinchZoomComponent;
  @ViewChild('ionContent') ionContent: any;

  public image: string;
  public video: string;

  public translate : number = 0;
  private isClosing = false;

  constructor(
    private navParams: NavParams,
    private gestureCtrl: GestureController,
    private modalController: ModalController,
    private animationCtrl: AnimationController
  ) { 
    this.image = this.navParams.data['imagen'];

    if (this.navParams.data['imagen'] == null) {
      this.video = this.navParams.data['video'];
    } else {
      this.video = this.navParams.data['imagen'];
    }
  }

  ngOnInit() {
   /* if (history.state.image == null) {
      this.video = history.state.video
    } else {
      this.image = history.state.image;
    }*/

  }

  ngAfterViewInit() {
    this.swipeDownToCloseModal(); 
  }


  swipeDownToCloseModal() {
    const swipeGesture: Gesture = this.gestureCtrl.create({
      el: this.ionContent.el,
      threshold: 1,
      maxAngle: 95,
      gestureName: 'swipeGesture',
      onStart: () => {
        this.isClosing = true;
      },
      onMove: (e) => {
        //console.log(e);
        
        if (this.isClosing && e.deltaY > 0) {

          document.getElementById('modal-view').style.transform = `translateY(${e.deltaY/2}px)`;
        }
      },
      onEnd: (e) => {
        console.log(e);
        if (this.isClosing && e.deltaY > 150) {
          this.closeModal();
        } else {
          // Reset styles
          this.ionContent.el.style.transform = '';
          this.ionContent.el.style.opacity = '';

          this.translate = 0;

          document.getElementById('modal-view').style.transform = '';
        }
        this.isClosing = false;
      }
    });
    swipeGesture.enable(true);
  }


  async closeModal() {
  
    const animation = this.animationCtrl.create()
      .addElement(this.ionContent.el)
      .duration(200)
      .iterations(1)
      .fromTo('opacity', this.ionContent.el.style.opacity, '1')
      .fromTo('scale', this.ionContent.el.style.transform, 'scale(0.8)');

    await animation.play();
    
    await this.modalController.dismiss(null, 'dismiss');
  }


}
