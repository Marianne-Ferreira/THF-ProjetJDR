import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login = 'Pseudo ou adresse mail'
  password = 'Mot de passe';
  submit = 'Allons-y !';
  stay = 'Rester connecté.e';
  password_forgot = 'Mot de passe oublié';

  ngOnInit(): void {
  }

}
