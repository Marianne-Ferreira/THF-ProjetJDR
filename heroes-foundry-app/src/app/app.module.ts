import { routes } from './route';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

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
import { ListeUserComponent } from './liste-user/liste-user.component';
import { GestionBoutiqueComponent } from './gestion-boutique/gestion-boutique.component';
import { PersonnageUserComponent } from './personnage-user/personnage-user.component';

@NgModule({ //Déclaration des modules auprès d'Angular
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
    PersonnageUserComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes)],
  //routermodule pour diriger vers des pages
  //HttpClientModule permet d'envoyer des requêtes
  providers: [],//injection de dépendances d'Angular (reliquat)
  bootstrap: [AppComponent]
})
export class AppModule { } //run cette ligne au démarrage de l'application en gros module racine
