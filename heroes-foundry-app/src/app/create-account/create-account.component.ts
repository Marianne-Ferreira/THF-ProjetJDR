import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router
  ) {
    this.form = new FormGroup({
      prenom: new FormControl('', Validators.minLength(2)),
      nom: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required, this.checkLogin()),
      passwordGroup: new FormGroup(
        {
          password: new FormControl('', Validators.required),
          confirm: new FormControl(),
        },
        this.passwordAndConfirmEquals
      ),
    });
  }

  checkLogin(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.inscriptionService.checkLogin(control.value).pipe(
        map((bool) => {
          return bool ? { loginExist: true } : null;
        })
      );
    };
  }

  passwordAndConfirmEquals(control: AbstractControl): ValidationErrors | null {
    let group = control as FormGroup;
    if (group.get('password')?.errors) {
      return null;
    }
    return group.get('password')?.value == group.get('confirm')?.value
      ? null
      : { passwordAndConfirmNotEquals: true };
  }

  ngOnInit(): void {}

  submit() {
    let compte = {
      prenom: this.form.get('prenom')?.value,
      nom: this.form.get('nom')?.value,
      login: this.form.get('pseudo')?.value,
      password: this.form.get('passwordGroup.password')?.value,
    };
    console.log('toto');
    this.inscriptionService.inscription(compte).subscribe((data) => {
      console.log('toto');
      this.router.navigate(['/home-user'], {
        queryParams: { inscription: true },
      });
    });
  }
}
