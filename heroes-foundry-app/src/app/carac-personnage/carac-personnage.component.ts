import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-carac-personnage',
  templateUrl: './carac-personnage.component.html',
  styleUrls: ['./carac-personnage.component.css'],
})
export class CaracPersonnageComponent implements OnInit {
  totalPointsResult = 27;
  totalPointsForce = 0;
  totalPointsCharisme = 0;
  totalPointsSagesse = 0;
  totalPointsDexterite = 0;
  totalPointsIntelligence = 0;
  totalPointsConstitution = 0;
  forceValue = 8;
  charismeValue = 8;
  sagesseValue = 8;
  intelligenceValue = 8;
  dexteriteValue = 8;
  constitutionValue = 8;

  constructor() {}

  ngOnInit(): void {}

  forceValueChange(value: any) {
    if (this.forceValue == 15) {
      this.totalPointsForce = 9;
    } else if (this.forceValue == 14) {
      this.totalPointsForce = 7;
    } else {
      this.totalPointsForce = this.forceValue - 8;
    }

    if (this.totalPointsResult > 0) {
      this.totalPointsResult =
        27 -
        (this.totalPointsForce +
          this.totalPointsCharisme +
          this.totalPointsSagesse +
          this.totalPointsIntelligence +
          this.totalPointsDexterite +
          this.totalPointsConstitution);
    } else {
      this.forceValue--;
      this.totalPointsResult++;
    }
    console.log(this.totalPointsForce + '/' + this.totalPointsResult);
  }

  charismeValueChange(value: any) {
    if (this.charismeValue == 15) {
      this.totalPointsCharisme = 9;
    } else if (this.charismeValue == 14) {
      this.totalPointsCharisme = 7;
    } else {
      this.totalPointsCharisme = this.charismeValue - 8;
    }

    if (this.totalPointsResult > 0) {
      this.totalPointsResult =
        27 -
        (this.totalPointsCharisme +
          this.totalPointsForce +
          this.totalPointsSagesse +
          this.totalPointsIntelligence +
          this.totalPointsDexterite +
          this.totalPointsConstitution);
    } else {
      this.charismeValue--;
      this.totalPointsResult++;
    }
    console.log(this.totalPointsCharisme + '/' + this.totalPointsResult);
  }

  sagesseValueChange(value: any) {
    if (this.sagesseValue == 15) {
      this.totalPointsSagesse = 9;
    } else if (this.sagesseValue == 14) {
      this.totalPointsSagesse = 7;
    } else {
      this.totalPointsSagesse = this.sagesseValue - 8;
    }

    if (this.totalPointsResult > 0) {
      this.totalPointsResult =
        27 -
        (this.totalPointsCharisme +
          this.totalPointsForce +
          this.totalPointsSagesse +
          this.totalPointsIntelligence +
          this.totalPointsDexterite +
          this.totalPointsConstitution);
    } else {
      this.sagesseValue--;
      this.totalPointsResult++;
    }
    console.log(this.totalPointsSagesse + '/' + this.totalPointsResult);
  }

  intelligenceValueChange(value: any) {
    if (this.intelligenceValue == 15) {
      this.totalPointsIntelligence = 9;
    } else if (this.intelligenceValue == 14) {
      this.totalPointsIntelligence = 7;
    } else {
      this.totalPointsIntelligence = this.intelligenceValue - 8;
    }

    if (this.totalPointsResult > 0) {
      this.totalPointsResult =
        27 -
        (this.totalPointsCharisme +
          this.totalPointsForce +
          this.totalPointsSagesse +
          this.totalPointsIntelligence +
          this.totalPointsDexterite +
          this.totalPointsConstitution);
    } else {
      this.intelligenceValue--;
      this.totalPointsResult++;
    }
    console.log(this.totalPointsIntelligence + '/' + this.totalPointsResult);
  }

  dexteriteValueChange(value: any) {
    if (this.dexteriteValue == 15) {
      this.totalPointsDexterite = 9;
    } else if (this.dexteriteValue == 14) {
      this.totalPointsDexterite = 7;
    } else {
      this.totalPointsDexterite = this.dexteriteValue - 8;
    }

    if (this.totalPointsResult > 0) {
      this.totalPointsResult =
        27 -
        (this.totalPointsCharisme +
          this.totalPointsForce +
          this.totalPointsSagesse +
          this.totalPointsIntelligence +
          this.totalPointsDexterite +
          this.totalPointsConstitution);
    } else {
      this.dexteriteValue--;
      this.totalPointsResult++;
    }
    console.log(this.totalPointsDexterite + '/' + this.totalPointsResult);
  }

  constitutionValueChange(value: any) {
    if (this.constitutionValue == 15) {
      this.totalPointsConstitution = 9;
    } else if (this.constitutionValue == 14) {
      this.totalPointsConstitution = 7;
    } else {
      this.totalPointsConstitution = this.constitutionValue - 8;
    }

    if (this.totalPointsResult > 0) {
      this.totalPointsResult =
        27 -
        (this.totalPointsCharisme +
          this.totalPointsForce +
          this.totalPointsSagesse +
          this.totalPointsIntelligence +
          this.totalPointsDexterite +
          this.totalPointsConstitution);
    } else {
      this.constitutionValue--;
      this.totalPointsResult++;
    }
    console.log(this.totalPointsConstitution + '/' + this.totalPointsResult);
  }
}

// class

// document.getElementById('toto')?.addEventListener('click', () => {
//   console.log('click')
//   fetch('http://localhost:4200/personnage')
//   .then(res => { console.log(res)})
//   .catch(err => { console.log(err)})
// })
