import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  input: string ='';

  /* Formulaire façon code*/
  monForm:FormGroup;

  constructor() {
    //this.monForm=this.fb.group({})
    this.monForm = new FormGroup({
      nom : new FormControl('', Validators.required),
      prenom : new FormControl('',),
      login : new FormControl('', [Validators.required, Validators.email]),//nom du control
      password : new FormControl(),
    });
}

  ngOnInit(): void {
  }



/* Formulaire façon code*/



  submit(createAccountForm: any){
let formGroup = createAccountForm as FormGroup; //créér une var que l'on va récuperer sous la forme d'un FormGroup => "Cast"
console.log(formGroup.controls['input']);
  }

}
