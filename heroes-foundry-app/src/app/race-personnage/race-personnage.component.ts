import { Router } from '@angular/router';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-personnage',
  templateUrl: './race-personnage.component.html',
  styleUrls: ['./race-personnage.component.css']
})
export class RacePersonnageComponent implements OnInit {
  personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);
  race: string='maRace';
  
  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }


  saveRace() {

    sessionStorage.setItem('personnage', JSON.stringify(this.personnage));
    this.router.navigate(['/metier-personnage']);
  }

}
