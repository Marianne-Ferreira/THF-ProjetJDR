import { Personnage } from './../model/personnage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metier-personnage',
  templateUrl: './metier-personnage.component.html',
  styleUrls: ['./metier-personnage.component.css']
})
export class MetierPersonnageComponent implements OnInit {
  personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);
  metier: string='monmetier';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveMetier() {

    sessionStorage.setItem('personnage', JSON.stringify(this.personnage));
    this.router.navigate(['/carac-personnage']);
  }

}
