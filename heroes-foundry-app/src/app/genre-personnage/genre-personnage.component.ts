
import { ActivatedRoute, Router } from '@angular/router';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-genre-personnage',
  templateUrl: './genre-personnage.component.html',
  styleUrls: ['./genre-personnage.component.css']
})
export class GenrePersonnageComponent implements OnInit {
personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);
genre: string = 'monGenre';

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }


  saveGenre() {
    this.personnage.genre=this.genre;
    sessionStorage.setItem('personnage', JSON.stringify(this.personnage));
    this.router.navigate(['/race-personnage']);
  }

}
