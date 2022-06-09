import { Consommables } from './../model/consommables';
import { Equipement } from './../model/equipement';
import { Stuff } from './../model/stuff';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-boutique',
  templateUrl: './gestion-boutique.component.html',
  styleUrls: ['./gestion-boutique.component.css']
})
export class GestionBoutiqueComponent implements OnInit {

  equipement : Equipement[] = [];
  consommables : Consommables[] = [];
  message = '';
  showMessage = false;

  constructor() { }

  ngOnInit(): void {


  }

}
