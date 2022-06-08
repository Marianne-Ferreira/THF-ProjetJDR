import { CreateStuffComponent } from './create-stuff/create-stuff.component';
import { BoutiqueUserComponent } from './boutique-user/boutique-user.component';
import { DisplayPersonnageComponent } from './display-personnage/display-personnage.component';
import { RecapPersonnageComponent } from './recap-personnage/recap-personnage.component';
import { StuffPersonnageComponent } from './stuff-personnage/stuff-personnage.component';
import { AlignementPersonnageComponent } from './alignement-personnage/alignement-personnage.component';
import { CompetencePersonnageComponent } from './competence-personnage/competence-personnage.component';
import { MetierPersonnageComponent } from './metier-personnage/metier-personnage.component';
import { RacePersonnageComponent } from './race-personnage/race-personnage.component';
import { GenrePersonnageComponent } from './genre-personnage/genre-personnage.component';
import { NomPersonnageComponent } from './nom-personnage/nom-personnage.component';
import { CaracPersonnageComponent } from './carac-personnage/carac-personnage.component';
import { DisplayStuffComponent } from './display-stuff/display-stuff.component';
import { PersonnageUserComponent } from './personnage-user/personnage-user.component';
import { GestionBoutiqueComponent } from './gestion-boutique/gestion-boutique.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'liste-user', component: ListeUserComponent },
  { path: 'personnage-user', component: PersonnageUserComponent },
  { path: 'gestion-boutique', component: GestionBoutiqueComponent },
  { path: 'display-stuff', component: DisplayStuffComponent },
  { path: 'create-stuff', component: CreateStuffComponent },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'nom-personnage', component: NomPersonnageComponent },
  { path: 'genre-personnage', component: GenrePersonnageComponent },
  { path: 'race-personnage', component: RacePersonnageComponent },
  { path: 'metier-personnage', component: MetierPersonnageComponent },
  { path: 'display-personnage', component: DisplayPersonnageComponent },
  { path: 'boutique-user', component: BoutiqueUserComponent },
  { path: 'carac-personnage', component: CaracPersonnageComponent },
  { path: 'competence-personnage', component: CompetencePersonnageComponent },
  { path: 'alignement-personnage', component: AlignementPersonnageComponent },
  { path: 'stuff-personnage', component: StuffPersonnageComponent },
  { path: 'recap-personnage', component: RecapPersonnageComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'mdp-oublie', component: PasswordForgotComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //ajouter autant de path qu'il y a besoin
];
