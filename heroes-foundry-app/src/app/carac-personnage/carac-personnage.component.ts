import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-carac-personnage',
  templateUrl: './carac-personnage.component.html',
  styleUrls: ['./carac-personnage.component.css'],
})
export class CaracPersonnageComponent implements OnInit {
  totalPointsResult = 27;
  forceValue = '';

  constructor() {}

  ngOnInit(): void {}

  forceValueChange(value: 15) {
    console.log(value);
    console.log(this.totalPointsResult);
    this.totalPointsResult = this.totalPointsResult - 9;
  }

  //     if (valeur == 15) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 9;
  //         totalPointsResult = totalPointsResult - 9;
  //     } else if (valeur == 14) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 7;
  //         totalPointsResult = totalPointsResult - 7;
  //     } else if (valeur == 13) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 5;
  //         totalPointsResult = totalPointsResult - 5;
  //     } else if (valeur == 12) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 4;
  //         totalPointsResult = totalPointsResult - 4;
  //     } else if (valeur == 11) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 3;
  //         totalPointsResult = totalPointsResult - 3;
  //     } else if (valeur == 10) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 2;
  //         totalPointsResult = totalPointsResult - 2;
  //     } else if (valeur == 9) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 1;
  //         totalPointsResult = totalPointsResult - 1;
  //     } else if (valeur == 8) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 0;
  //         totalPointsResult = totalPointsResult;
  //     } else if (valeur >= 8 || valeur <= 15) {
  //         window.alert('Veuillez rentrer une valeur comprise entre 8 et 15.');
  //     }
  // });

  // var charismeValue = document.getElementById('characCharisme');
  // charismeValue.addEventListener('change', (e) => {
  //     var valeur = e.target.value;
  //     if (valeur == 15) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 9;
  //         totalPointsResult = totalPointsResult - 9;
  //     } else if (valeur == 14) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 7;
  //         totalPointsResult = totalPointsResult - 7;
  //     } else if (valeur == 13) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 5;
  //         totalPointsResult = totalPointsResult - 5;
  //     } else if (valeur == 12) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 4;
  //         totalPointsResult = totalPointsResult - 4;
  //     } else if (valeur == 11) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 3;
  //         totalPointsResult = totalPointsResult - 3;
  //     } else if (valeur == 10) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 2;
  //         totalPointsResult = totalPointsResult - 2;
  //     } else if (valeur == 9) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 1;
  //         totalPointsResult = totalPointsResult - 1;
  //     } else if (valeur == 8) {
  //         document.getElementById('totalPoints').innerHTML = totalPointsResult - 0;
  //         totalPointsResult = totalPointsResult;
  //     } else if (valeur >= 8 || valeur <= 15) {
  //         window.alert('Veuillez rentrer une valeur comprise entre 8 et 15.');
  //     }
  // });

  // exemple switch -- il fonctionne pas, mais le modèle c'est ça
  // var charismeValue = document.getElementById('characCharisme');
  // charismeValue.addEventListener('change', (e) => {
  //     var value = e.target.value;
  //     console.log(value == 15, totalPointsResult);
  //     switch (value) {
  //         case 15:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 9;
  //             totalPointsResult = totalPointsResult - 9;
  //             break;
  //         case value == 14:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 7;
  //             totalPointsResult = totalPointsResult - 7;
  //             break;
  //         case value == 13:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 5;
  //             totalPointsResult = totalPointsResult - 5;
  //             break;
  //         case value == 12:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 4;
  //             totalPointsResult = totalPointsResult - 4;
  //             break;
  //         case value == 11:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 3;
  //             totalPointsResult = totalPointsResult - 3;
  //             break;
  //         case value == 10:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 2;
  //             totalPointsResult = totalPointsResult - 2;
  //             break;
  //         case value == 9:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 1;
  //             totalPointsResult = totalPointsResult - 1;
  //             break;
  //         case value == 8:
  //             document.getElementById('totalPoints').innerHTML = totalPointsResult - 0
  //             totalPointsResult = totalPointsResult;
  //             break;
  //         default:
  //             console.log('Veuillez rentrer une valeur comprise entre 8 et 15.');
  //             break;
  //     }
  // });
}
