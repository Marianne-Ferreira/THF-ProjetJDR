import { Router } from '@angular/router';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alignement-personnage',
  templateUrl: './alignement-personnage.component.html',
  styleUrls: ['./alignement-personnage.component.css']
})
export class AlignementPersonnageComponent implements OnInit {
  personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);
  alignement: string = 'monAlignement';
  
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  saveAlignement() {

    sessionStorage.setItem('personnage', JSON.stringify(this.personnage));
    this.router.navigate(['/stuff-personnage']);
  }

}
