import { Joueur } from './../model/joueur';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nom-personnage',
  templateUrl: './nom-personnage.component.html',
  styleUrls: ['./nom-personnage.component.css']
})
export class NomPersonnageComponent implements OnInit {
// personnage : Personnage = new Personnage();
nom : string ='';
  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

saveNom() {
    let personnage = {
      nom : this.nom,
      genre: '',
      metier:'',
      alignement:'',
    };
    console.log(this.nom)
    sessionStorage.setItem('personnage', JSON.stringify(personnage));
    this.router.navigate(['/genre-personnage']);
  }
}
