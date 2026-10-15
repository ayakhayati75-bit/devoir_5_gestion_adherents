import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Adherent } from '../model/adherent.model';
import { AdherentService } from '../services/adherent.service';

// Recherche par nom en utilisant l'événement keyup
@Component({
  selector: 'app-recherche-par-nom-keyup',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom-keyup.component.html',
})
export class RechercheParNomKeyupComponent implements OnInit {
  adherents!: Adherent[];
  allAdherents!: Adherent[];
  private adherentService = inject(AdherentService);

  ngOnInit(): void {
    this.adherents = this.adherentService.listeAdherents();
    this.allAdherents = this.adherentService.listeAdherents();
  }

  onKeyUp(filterText: string) {
    this.adherents = this.allAdherents.filter((item) =>
      item.nom.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
