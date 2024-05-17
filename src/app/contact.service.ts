import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  }
  private saveContacts(): void {
    // Save contacts to local storage
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.saveContacts();
  }
  delContact(id: number) {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.saveContacts();
    }
  }

  modContact(modifiedContact: Contact): void {
    const index = this.contacts.findIndex(
      (contact) => contact.id == modifiedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = modifiedContact;
      this.saveContacts();
    }
  }

  getContact(id: number) {
    console.log(typeof(id))
    const index = this.contacts.findIndex((contact) => contact.id == id);
    if (index !== -1) {
      return this.contacts[index];
    } else {
      return null;
    }
  }
  getContacts() {
    return this.contacts;
  }
}
