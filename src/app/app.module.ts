import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { FullCalendarModule } from '@fullcalendar/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({ 
  declarations: [AppComponent],
  bootstrap: [AppComponent], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
      },
      defaultLanguage: 'es',
      useDefaultLang: true,

    }),
    PinchZoomModule,
    FullCalendarModule
  ], 
    
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideHttpClient(withInterceptorsFromDi()),
    ] 
  })
export class AppModule {}
