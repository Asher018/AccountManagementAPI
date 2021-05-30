import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../service/card/card.module';
import { PartyaccountAddModule } from '../partyaccount/add/partyaccount-add/partyaccount-add.module';
import { PartyaccountCardModule } from '../partyaccount/partyaccount-card/partyaccount-card/partyaccount-card.module';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, FormsModule, CardModule, PartyaccountAddModule, PartyaccountCardModule, AppRoutingModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
