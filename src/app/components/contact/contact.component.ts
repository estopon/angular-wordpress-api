import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(public _MessageService: MessageService) { }

  ngOnInit() {
  }

  processForm() {
    const form = '{"name": "' + this.name + '","email": "' + this.email + '", "message": "' + this.message + '"}';
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    }, err => {
      Swal.fire('Formulario de contacto', 'Ha ocurrido un error en el envío: ' + err, 'error');
    });
  }

}
