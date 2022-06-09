import { JoueurService } from './../services/joueur.service';
import { Router } from '@angular/router';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-personnage',
  templateUrl: './recap-personnage.component.html',
  styleUrls: ['./recap-personnage.component.css']
})
export class RecapPersonnageComponent implements OnInit {
  personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);

  constructor(private personnageService : JoueurService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.personnageService.createPersonnage(this.personnage).subscribe(() => {
      this.router.navigateByUrl('/home-user');

    });


    console.log(this.personnage.alignement)
  }


}
