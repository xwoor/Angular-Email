import { Component } from '@angular/core';
import { MensajeService } from './services/mensaje.service';
import * as swal from 'sweetalert';
import { Email } from '../models/email.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Email('','','','');
  constructor( public _mensaje: MensajeService){

  }
  contactForm(form:Email){
    this._mensaje.sendMessage(form)
    .subscribe(() => {
      console.log("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
  }
}
