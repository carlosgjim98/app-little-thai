import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.page.html',
  styleUrls: ['./idiomas.page.scss'],
})
export class IdiomasPage implements OnInit {

  public lang: string;

  constructor(
    public translate: TranslateService,
    private navController: NavController,
    private utilities: UtilitiesService
  ){
    this.translate.setDefaultLang('es');
   }

  ngOnInit() {

    this.lang = this.translate.currentLang;

  }


  saveLanguage(){
    this.utilities.setLangPreferences(this.lang).then(()=>{
      this.translate.use(this.lang);
      this.navController.pop();
    }, (error)=>{
      console.log(error);
      this.utilities.showToast("Error al cambiar el idioma");
    })


  }

}
