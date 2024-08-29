import { Component, NgZone, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavParams } from '@ionic/angular';
import { format, parse, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {

  public text: string = '';
  public date: any;

  public time;
  public timeString;

  public reminder: any;

  public hourValues: string = "0, 1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23";
  public minValues: string = "0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55";

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private ngZone: NgZone,
  ) { 

    if(this.navParams.data['date']){
      this.date = this.navParams.data['date'];
    }
    
  }

  ngOnInit() {
    let formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX", { locale: es });
    this.time = formattedDate;
  }


  submitForm(){


    this.modalController.dismiss({
      date: this.date,
      time: this.timeString,
      text: this.text
    }, 'reminder');

  }


  cancel() {
    this.modalController.dismiss();
  }

  public timeChange(event){
    console.log("time", event.detail.value);

    if(event.detail.value.length != 5){
      let formattedString = format(parseISO(event.detail.value), 'HH:mm');

      console.log(formattedString);
      this.timeString = formattedString;
    }
    
    
  }
}
