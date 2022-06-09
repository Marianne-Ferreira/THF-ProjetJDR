import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from './../model/compte';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login = '';
  password = '';
  showError = false;
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submit(form: any) {
    this.authService.auth(this.login, this.password).subscribe({
      next: (compte: Compte) => {
        this.showError = false;
        sessionStorage.setItem('token', btoa(`${this.login}:${this.password}`));
        sessionStorage.setItem('compte', JSON.stringify(compte));
        this.router.navigateByUrl('/home-user');
      },
      error: (error: any) => {
        console.log(error);
        this.message = "Le pseudo ou le mot de passe est incorrect, veuillez ré-essayer.";
        this.showError = true;
      },
    });
  }

}
