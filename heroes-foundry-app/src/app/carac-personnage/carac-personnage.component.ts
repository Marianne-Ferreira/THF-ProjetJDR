import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-carac-personnage',
  templateUrl: './carac-personnage.component.html',
  styleUrls: ['./carac-personnage.component.css'],
})
export class CaracPersonnageComponent implements OnInit {
  totalPointsResult = 27;
  forceValue = '';
  charismeValue = '';
  sagesseValue = '';
  intelligenceValue = '';
  dexteriteValue = '';
  constitutionValue = '';

  constructor() {}

  ngOnInit(): void {}

  forceValueChange(value: any) {
    if ((value = 15)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 9;
    } else if ((value = 14)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 7;
    } else if ((value = 13)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 5;
    } else if ((value = 12)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 4;
    } else if ((value = 11)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 3;
    } else if ((value = 10)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 2;
    } else if ((value = 9)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 1;
    } else if ((value = 8)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 0;
    } else {
      this.totalPointsResult = this.totalPointsResult;
      //Afficher message d'erreur
    }
  }

  charismeValueChange(value: any) {
    if ((value = 15)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 9;
    } else if ((value = 14)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 7;
    } else if ((value = 13)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 5;
    } else if ((value = 12)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 4;
    } else if ((value = 11)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 3;
    } else if ((value = 10)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 2;
    } else if ((value = 9)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 1;
    } else if ((value = 8)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 0;
    } else {
      this.totalPointsResult = this.totalPointsResult;
      //Afficher message d'erreur
    }
  }

  sagesseValueChange(value: any) {
    if ((value = 15)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 9;
    } else if ((value = 14)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 7;
    } else if ((value = 13)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 5;
    } else if ((value = 12)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 4;
    } else if ((value = 11)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 3;
    } else if ((value = 10)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 2;
    } else if ((value = 9)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 1;
    } else if ((value = 8)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 0;
    } else {
      this.totalPointsResult = this.totalPointsResult;
      //Afficher message d'erreur
    }
  }

  dexteriteValueChange(value: any) {
    if ((value = 15)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 9;
    } else if ((value = 14)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 7;
    } else if ((value = 13)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 5;
    } else if ((value = 12)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 4;
    } else if ((value = 11)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 3;
    } else if ((value = 10)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 2;
    } else if ((value = 9)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 1;
    } else if ((value = 8)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 0;
    } else {
      this.totalPointsResult = this.totalPointsResult;
      //Afficher message d'erreur
    }
  }

  intelligenceValueChange(value: any) {
    if ((value = 15)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 9;
    } else if ((value = 14)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 7;
    } else if ((value = 13)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 5;
    } else if ((value = 12)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 4;
    } else if ((value = 11)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 3;
    } else if ((value = 10)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 2;
    } else if ((value = 9)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 1;
    } else if ((value = 8)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 0;
    } else {
      this.totalPointsResult = this.totalPointsResult;
      //Afficher message d'erreur
    }
  }

  constitutionValueChange(value: any) {
    if ((value = 15)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 9;
    } else if ((value = 14)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 7;
    } else if ((value = 13)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 5;
    } else if ((value = 12)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 4;
    } else if ((value = 11)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 3;
    } else if ((value = 10)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 2;
    } else if ((value = 9)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 1;
    } else if ((value = 8)) {
      console.log(value);
      console.log(this.totalPointsResult);
      this.totalPointsResult = this.totalPointsResult - 0;
    } else {
      this.totalPointsResult = this.totalPointsResult;
      //Afficher message d'erreur
    }
  }
}
