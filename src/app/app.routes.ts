import { Routes } from '@angular/router';
import { AdherentsComponent } from './adherents/adherents.component';
import { AddAdherentComponent } from './add-adherent/add-adherent.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParNomKeyupComponent } from './recherche-par-nom-keyup/recherche-par-nom-keyup.component';
import { UpdateAdherentComponent } from './update-adherent/update-adherent.component';

export const routes: Routes = [
  { path: 'adherents', component: AdherentsComponent },
  { path: 'add-adherent', component: AddAdherentComponent },
  { path: 'rechercheParType', component: RechercheParTypeComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'rechercheParNomKeyup', component: RechercheParNomKeyupComponent },
  { path: 'update-adherent/:id', component: UpdateAdherentComponent },
  { path: '', redirectTo: 'adherents', pathMatch: 'full' },
];
