import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Email } from '../../models/email.model';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor( private http: HttpClient ) { }


  sendMessage (body:Email){
    return this.http.post('http://localhost:3000/formulario', body);
  }
}
