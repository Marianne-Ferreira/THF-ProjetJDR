import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',//balise qui l'appelle
  templateUrl: './app.component.html',//ici on déclare la vue du composant
  styleUrls: ['./app.component.css']//style de la vue
})

export class AppComponent implements OnInit{ //ici on déclare les propriétés et les méthodes des composants
  login = 'Pseudo ou adresse mail'
  password = 'Mot de passe';
  submit = 'Allons-y !';
  stay = 'Rester connecté.e';
  password_forgot = 'Mot de passe oublié';

  ngOnInit() {
    console.log(this.login);//on utilise le this car login est défini au dessus
    this.displayLogin('Layla');
  }

  //Création d'une méthode pour récupérer le pseudo du user
  displayLogin(loginUser : string){
  console.log('Bonjour ' + loginUser);
  //console.log('Bonjour ${loginUser}'); écriture alternative JS moderne mais qui ne fonctionne pas ici
}
}


