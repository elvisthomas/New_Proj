import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTED COMPONENTS
import { SignupComponent } from './components/signup/signup.component'

const routes: Routes = [
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
