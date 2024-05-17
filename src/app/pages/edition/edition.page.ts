import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.page.html',
  styleUrls: ['./edition.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class EditionPage implements OnInit {
  index!: number;
  Nom!: string;
  Class!: string;
  Tel!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['id'];
    });
    const cont = this.contactService.getContact(this.index); 
    if (cont) {
      this.Nom = cont.nom ?? ''; 
      this.Class = cont.classe ?? '';
      this.Tel = cont.numeroTelephone ?? null;
    }
  }
  modUser() {
    const modContact: Contact = {
      id: this.index,
      nom: this.Nom,
      classe: this.Class,
      numeroTelephone: this.Tel,
    };
    this.contactService.modContact(modContact);
    this.router.navigate(['/home']);
  }
}
