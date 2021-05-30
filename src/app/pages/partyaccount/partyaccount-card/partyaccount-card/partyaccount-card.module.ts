import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PartyaccountCardComponent } from './partyaccount-card.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [PartyaccountCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDialogModule
  ],
  exports: [
    PartyaccountCardComponent
  ]
})
export class PartyaccountCardModule { }
