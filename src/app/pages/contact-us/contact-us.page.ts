import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors } from 'src/app/utils/utils';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  form: FormGroup;
  public base64img: string;
  public isLoading = true;
  
  constructor(
    private apiService: ApiService,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
        
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    
      email: new FormControl('', 
        {validators: [Validators.required, Validators.email]}
      ),
      phone: new FormControl('', 
        {validators: [Validators.required]}
      ),
      text: new FormControl('', 
        {validators: [Validators.required]}
      ),
    });
  }


  public submitForm(){
    console.log("FORM COMPLETO", this.form.value);
    
    this.utilitiesService.showLoading("Enviando...").then(()=>{
      this.apiService.addEntity('contact-us',this.form.value).subscribe((any) => {

        this.utilitiesService.dismissLoading();
  
        this.utilitiesService.showToast('Enviado correctamente');
        this.form.reset();

        this.navCtrl.pop();
      }, (error) => {
        
        this.utilitiesService.dismissLoading();
        this.utilitiesService.showToast(codeErrors(error));
  
      });
    });

    
    
  }
}
