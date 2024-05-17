import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AjoutPage implements OnInit {
  static index: number = 0;
  Nom!: string;
  Class!: string;
  Tel!: number;
  newContact: Contact = {
    id: 0,
    nom: '',
    classe: '',
    numeroTelephone: 0,
  };
  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit() {}

  addUser() {
    AjoutPage.index++;
    this.newContact.id = AjoutPage.index;
    this.newContact.nom = this.Nom;
    this.newContact.classe = this.Class;
    this.newContact.numeroTelephone = this.Tel;

    this.contactService.addContact(this.newContact);
    console.log(this.contactService.getContacts);
    this.newContact = {
      id: 0,
      nom: '',
      classe: '',
      numeroTelephone: 0,
    };

    this.router.navigate(['/home']);
  }
}
