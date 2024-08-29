import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { ApiService } from 'src/app/services/api.service';
import { ModalController, NavController } from '@ionic/angular';
import { format, parse, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { ReminderPage } from '../reminder/reminder.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    firstDay: 1,
    locale: 'es',
    weekends: true,
    selectable: true,

    aspectRatio: 1,
    dateClick: (arg) => this.handleDateClick(arg),
    select: (arg) => this.handleDateClick(arg),
    eventClick(arg) {
        console.log(arg.event);
    },
    events: []
  };
  
  public datetime;

  public elementSelected: Element;

  public eventsCalendar: EventInput[];

  public allEvents: any[] = [];
  public eventsSelectedDate: any;
  public dateSelected: any;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    let dateToday = new Date();
    dateToday.setDate(dateToday.getDate() - 7);
    let index = 0;
    for (let i = 0; i < 50; i++) {
      // Creamos una nueva fecha basada en `dateToday`.
      let newDate = new Date(dateToday);
      // Sumamos `i` días a la fecha original.
      newDate.setDate(dateToday.getDate() + i);
      // Convertimos la fecha a formato YYYY-MM-DD.
      let formattedDate = newDate.toISOString().split('T')[0];
      
      // Generamos una hora aleatoria.
      let randomHours = Math.floor(Math.random() * 24);
      let randomMinutes = Math.floor(Math.random() * 60);
      let randomSeconds = Math.floor(Math.random() * 60);
      let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;



      // Definimos un color arbitrario para cada fecha.
      let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      // Añadimos el objeto con la fecha (como string) y color al array.
      
      this.allEvents.push({ id: index, title: 'Prueba', date: formattedDate , time: formattedTime, color: color, class: 'color2' });
      index++;
      if(Math.random() < 0.5){

        let randomHours = Math.floor(Math.random() * 24);
        let randomMinutes = Math.floor(Math.random() * 60);
        let randomSeconds = Math.floor(Math.random() * 60);
        let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;

        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, title: 'Prueba', date: formattedDate , time: formattedTime, color: color , class: 'color2'});
        index++;
      }

      if(Math.random() < 0.5){
        let randomHours = Math.floor(Math.random() * 24);
        let randomMinutes = Math.floor(Math.random() * 60);
        let randomSeconds = Math.floor(Math.random() * 60);
        let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;

        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, title: 'Prueba', date: formattedDate , time: formattedTime, color: color ,class: 'color1'});
        index++;
      }

      if(Math.random() < 0.5){
        let randomHours = Math.floor(Math.random() * 24);
        let randomMinutes = Math.floor(Math.random() * 60);
        let randomSeconds = Math.floor(Math.random() * 60);
        let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;

        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, title: 'Prueba', date: formattedDate , time: formattedTime, color: color, class: 'reminder' });
        index++;
      }
    }

    console.log("LOG EVENTS EXAMPLES", this.allEvents);
    

  }


  ionViewDidEnter(): void {
      this.eventsCalendar = [];

      this.allEvents.forEach(eventDate => {
        
        this.eventsCalendar.push(
          { title: 'Prueba', start: eventDate.date , color:eventDate.color },
        )

      });

      this.calendarOptions.events = this.eventsCalendar;
      this.calendarComponent.options = this.calendarOptions;



      setTimeout(() => {
        // Selecciona todos los elementos td con las clases específicas
        let td = document.querySelector('.fc .fc-daygrid-day.fc-day-today');

        // Añade la clase 'selected' a cada uno de esos elementos
        this.elementSelected = td;

        td.classList.add('selected');
      
        this.selectEventsToday();
      }, 500);

 

  }



  handleDateClick(arg) {

    console.log("EVENT DATE CLICK OR SELECT ", arg);
    
    console.log("DATE CLICK",arg.dateStr);

    this.dateSelected = arg.dateStr;

    if(this.elementSelected){
      this.elementSelected.classList.remove('selected');
    }
  
    this.elementSelected = arg.dayEl;

    arg.dayEl.classList.add('selected');

    let events = this.allEvents.filter(element => element.date == arg.dateStr);
       
    console.log("events filters this date", events);
    

    this.eventsSelectedDate = {
      date: this.dateSelected,
      allEvents: events
    }
    console.log("EVENTS SELECTED DATE", this.eventsSelectedDate);
    
  }



  public selectEventsToday(){
    let today = new Date();

    // Format the date as 'YYYY-MM-DD'
    let formattedDate = format(today, 'yyyy-MM-dd');
    let events = this.allEvents.filter(element => element.date == formattedDate);

    this.dateSelected = formattedDate;

    console.log("event filter", events);
    
    this.eventsSelectedDate = {
      date: this.dateSelected,
      allEvents: events
    }

    console.log("EVENTS SELECTED DATE", this.eventsSelectedDate);
  }

  getDate(date){
    let fechaParseada = parseISO(date);
    let formattedDate = format(fechaParseada, "EEEE, d MMM", { locale: es });
    return formattedDate;
  }

  getTime(timeString: string){

    if(timeString.length == 8){

      return timeString.substring(0,6);

    }

    // Parse the time string into a Date object
    let date = parse(timeString, 'HH:mm:ss', new Date());

    // Format the Date object to the desired format
    let formattedTime = format(date, 'H:mm a', { locale: es });

    // Replace 'AM'/'PM' with 'h'
    let finalFormattedTime = formattedTime.replace('AM', 'h').replace('PM', 'h');

    // Output the formatted time
    return finalFormattedTime; 
  }


  public async addReminder(){
    const modal = await this.modalController.create({
      component: ReminderPage,
      backdropDismiss: false,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
      componentProps: {
        date: this.dateSelected,
      }
    });


    modal.onDidDismiss().then(dataReturned => {

      console.log("REMINDER AÑADIDO", dataReturned.data);

      if(dataReturned.role == 'reminder'){
        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        
        this.eventsCalendar.push(
          { title: 'RECORDATORIO', start: dataReturned.data.date , color:color},
        )

        this.allEvents.push(
          { id: String(Math.random()*9999) ,title: 'RECORDATORIO', date: dataReturned.data.date , color:color, class: 'reminder'},
        )

        this.calendarOptions.events = [];
        this.calendarComponent.options = this.calendarOptions;
        this.calendarComponent.getApi().refetchEvents();

        setTimeout(() => {
          this.calendarOptions.events = this.eventsCalendar;
          this.calendarComponent.options = this.calendarOptions;
          this.calendarComponent.getApi().refetchEvents();
        }, 200);

  

      }
      

    });

    return await modal.present();
  }


}
