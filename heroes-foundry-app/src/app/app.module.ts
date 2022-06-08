import { routes } from './route';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AProposComponent } from './a-propos/a-propos.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ListeUserComponent } from './model/liste-user/liste-user.component';
import { GestionBoutiqueComponent } from './gestion-boutique/gestion-boutique.component';
import { PersonnageUserComponent } from './personnage-user/personnage-user.component';
import { DisplayStuffComponent } from './display-stuff/display-stuff.component';
import { CreateStuffComponent } from './create-stuff/create-stuff.component';
import { DisplayPersonnageComponent } from './display-personnage/display-personnage.component';
import { CaracPersonnageComponent } from './carac-personnage/carac-personnage.component';
import { NomPersonnageComponent } from './nom-personnage/nom-personnage.component';
import { GenrePersonnageComponent } from './genre-personnage/genre-personnage.component';
import { RacePersonnageComponent } from './race-personnage/race-personnage.component';
import { MetierPersonnageComponent } from './metier-personnage/metier-personnage.component';
import { CompetencePersonnageComponent } from './competence-personnage/competence-personnage.component';
import { AlignementPersonnageComponent } from './alignement-personnage/alignement-personnage.component';
import { StuffPersonnageComponent } from './stuff-personnage/stuff-personnage.component';
import { RecapPersonnageComponent } from './recap-personnage/recap-personnage.component';
import { BoutiqueUserComponent } from './boutique-user/boutique-user.component';

@NgModule({
  //Déclaration des modules auprès d'Angular
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AProposComponent,
    PasswordForgotComponent,
    HomeUserComponent,
    CreateAccountComponent,
    HomeAdminComponent,
    ListeUserComponent,
    GestionBoutiqueComponent,
    PersonnageUserComponent,
    DisplayStuffComponent,
    CreateStuffComponent,
    DisplayPersonnageComponent,
    CreateAccountComponent,
    CaracPersonnageComponent,
    NomPersonnageComponent,
    GenrePersonnageComponent,
    RacePersonnageComponent,
    MetierPersonnageComponent,
    CompetencePersonnageComponent,
    AlignementPersonnageComponent,
    StuffPersonnageComponent,
    RecapPersonnageComponent,
    BoutiqueUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  //routermodule pour diriger vers des pages
  //HttpClientModule permet d'envoyer des requêtes
  providers: [], //injection de dépendances d'Angular (reliquat)
  bootstrap: [AppComponent],
})
export class AppModule {} //run cette ligne au démarrage de l'application en gros module racine
