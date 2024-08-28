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

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @ViewChild('calendar2') calendarComponent2: FullCalendarComponent;

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
    private apiService: ApiService,
    private navController: NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    let dateToday = new Date();
    dateToday.setDate(dateToday.getDate() - 7);

    let index = 0;

    for (let i = 0; i < 100; i++) {
      // Creamos una nueva fecha basada en `dateToday`.
      let newDate = new Date(dateToday);
      
      // Sumamos `i` días a la fecha original.
      newDate.setDate(dateToday.getDate() + i);
      
      // Convertimos la fecha a formato YYYY-MM-DD.
      let formattedDate = newDate.toISOString().split('T')[0];
      
      // Definimos un color arbitrario para cada fecha.
      let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    
      // Añadimos el objeto con la fecha (como string) y color al array.
      
      
      this.allEvents.push({ id: index, date: formattedDate, color: color });
      index++;
      if(Math.random() < 0.5){
        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, date: formattedDate, color: color });
        index++;
      }

      if(Math.random() < 0.5){
        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, date: formattedDate, color: color });
        index++;
      }

      if(Math.random() < 0.5){
        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, date: formattedDate, color: color });
        index++;
      }
    }
    

    console.log("LOG EVENTS", this.allEvents);
    

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



      // Selecciona todos los elementos td con las clases específicas
      let td = document.querySelector('.fc .fc-daygrid-day.fc-day-today');

      // Añade la clase 'selected' a cada uno de esos elementos
      this.elementSelected = td;

      td.classList.add('selected');
     
      this.selectEventsToday();

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


    // FILTRAR EVENTOS DE ABAJO

    let events = this.allEvents.filter(element => element.date == arg.dateStr);

    console.log("event filter", events);
    
    if(events.length > 0){
      this.eventsSelectedDate = events[0];
    }else{
      this.eventsSelectedDate = {
        'date' : arg.dateStr,
        'allEvents' : [],
      };
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
    
    if(events.length > 0){
      this.eventsSelectedDate = events[0];
    }else{
      this.eventsSelectedDate = {
        'date' : formattedDate,
        'allEvents' : [],
      };
    }
    console.log("EVENTS SELECTED DATE", this.eventsSelectedDate);
  }

  getDate(date){
    let fechaParseada = parseISO(date);
    let formattedDate = format(fechaParseada, "EEEE, d MMM", { locale: es });
    return formattedDate;
  }


}
