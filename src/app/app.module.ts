import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({ 
  declarations: [AppComponent],
  bootstrap: [AppComponent], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    PinchZoomModule,
    FullCalendarModule
  ], 
    
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideHttpClient(withInterceptorsFromDi()),
    ] 
  })
export class AppModule {}
