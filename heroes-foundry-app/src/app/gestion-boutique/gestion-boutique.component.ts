import { AdminService } from './../services/admin.service';
import { Consommables } from './../model/consommables';
import { Equipement } from './../model/equipement';
import { Stuff } from './../model/stuff';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private adminService : AdminService,
    private aR: ActivatedRoute
  ) {}

  initConsommables(consommables : Consommables) {
    this.adminService.getAllConsommables(consommables).subscribe((datas) => {
      this.consommables = datas;
    });
  }

  ngOnInit(): void {}

}
