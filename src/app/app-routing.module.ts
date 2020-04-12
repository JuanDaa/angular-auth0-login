import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch:'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }