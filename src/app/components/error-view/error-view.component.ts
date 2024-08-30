import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss'],
})
export class ErrorViewComponent  implements OnInit {
  @Input() errorCode: string = '404'; // Código de error por defecto
  @Input() errorMessage: string = 'Página no encontrada'; // Mensaje de error por defecto
  @Input() isLoading: boolean = false; // Mensaje de error por defecto
  @Output() retryFunction = new EventEmitter<void>();
  @Output() backPage = new EventEmitter<void>();


  ngOnInit() {}

  async onRetry() {
    this.retryFunction.emit();
  }

  async onBack() {
    this.backPage.emit();
  }


}
