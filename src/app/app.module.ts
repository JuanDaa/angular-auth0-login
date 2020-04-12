
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PricesComponent } from './components/prices/prices.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,RouterModule ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, PricesComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, AuthGuard]
})
export class AppModule { }
