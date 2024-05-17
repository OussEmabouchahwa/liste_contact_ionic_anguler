import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
} from '@ionic/angular/standalone';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    IonButtons,
  ],
})
export class HomePage {
  contacts: Contact[] = [];
  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit() {
    // If you want to use sample data
    //this.contacts = this.contactes;

    // If you want to fetch contacts from a service
    this.contacts = this.contactService.getContacts();
  }

  ajouterContact() {
    this.router.navigate(['/ajout']);
  }
  supprimer(i: number) {
    this.contactService.delContact(i);
  }
  modifier(i: number) {
    this.router.navigate(['/edition/' + i ]);
  }
}
