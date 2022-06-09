import { Joueur } from './../model/joueur';
import { JoueurService } from './../services/joueur.service';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
personnages: Personnage[]=[];
message = ''
showMessage = false;

  constructor(
    private joueurService: JoueurService,
    private aR: ActivatedRoute
  ) {}

  initPersonnage() {
    console.log('toto')
    this.joueurService.getAllPersonnages().subscribe((datas) => {
      this.personnages = datas;
    });
  }

  ngOnInit(): void {
    this.showMessage = false;
    this.aR.queryParams.subscribe((params) => {
      if (params['query']) {
        if (params['query'] === 'create') {
          this.message = `creation du personnage ${params['id']}`;
        }
        this.showMessage = true;
      }
    });
    this.initPersonnage();
  }
  delete(id: number) {
    this.joueurService.deletePersonnageById(id).subscribe(() => {
      this.message = `personnage ${id} supprimée`;
      this.showMessage = true;
      this.initPersonnage();
    });
  }
}
