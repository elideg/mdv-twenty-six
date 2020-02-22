import { DrinksItemComponent } from './drinks/drinks-item/drinks-item.component';
import { DrinksComponent } from './drinks/drinks.component';
import { LoginComponent } from '@mdv-twenty-six/ui-lib';
import { WildComponent } from '@mdv-twenty-six/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'drinks', children: [
    { path: '', component: DrinksComponent },
    { path: ':id', component: DrinksItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
