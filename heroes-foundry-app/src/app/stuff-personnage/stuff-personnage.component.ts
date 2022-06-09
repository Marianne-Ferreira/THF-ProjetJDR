import { Router } from '@angular/router';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuff-personnage',
  templateUrl: './stuff-personnage.component.html',
  styleUrls: ['./stuff-personnage.component.css']
})
export class StuffPersonnageComponent implements OnInit {
  personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);
  stuff: string = 'monStuff';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  saveStuff() {

    sessionStorage.setItem('personnage', JSON.stringify(this.personnage));
    this.router.navigate(['/recap-personnage']);
  }

}
