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
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
    this._MessageService.sendMessage(this).subscribe(() => {
      Swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    });
  }

}
