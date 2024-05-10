import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

interface Contact {
  id: number;
  name: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts: Contact[] = [];
  newContactName: string = '';
  newContactPhoneNumber: string = '';

  constructor(public alertController: AlertController) {}

  addContact() {
    if (this.newContactName.trim() !== '' && this.newContactPhoneNumber.trim() !== '') {
      const newContact: Contact = {
        id: this.contacts.length + 1,
        name: this.newContactName,
        phoneNumber: this.newContactPhoneNumber
      };
      this.contacts.push(newContact);
      this.newContactName = '';
      this.newContactPhoneNumber = '';
    } else {
      this.presentAlert('Erreur', 'Veuillez remplir tous les champs.');
    }
  }

  removeContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c !== contact);
  }

  async editContact(contact: Contact) {
    const alert = await this.alertController.create({
      header: 'Modifier le contact',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: contact.name,
          placeholder: 'Nom'
        },
        {
          name: 'phoneNumber',
          type: 'text',
          value: contact.phoneNumber,
          placeholder: 'Numéro de téléphone'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Enregistrer',
          handler: (data) => {
            contact.name = data.name;
            contact.phoneNumber = data.phoneNumber;
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
