import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';

export const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'home-user', component: HomeUserComponent},
  {path: 'a-propos', component: AProposComponent},
  {path: 'mdp-oublie', component : PasswordForgotComponent},
  {path: 'create-account', component : CreateAccountComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
  //ajouter autant de path qu'il y a besoin
];
