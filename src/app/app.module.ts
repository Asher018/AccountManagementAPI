import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from  '@angular/fire';
import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { AngularFireAuthModule } from  '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeComponent} from 'src/app/pages/home/home.component'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './pages/service/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/directives/on-hover/highlight.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PartyaccountAddComponent } from './pages/partyaccount/add/partyaccount-add/partyaccount-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { PartyaccountCardComponent } from './pages/partyaccount/partyaccount-card/partyaccount-card/partyaccount-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { PartyaccountUpdateComponent} from 'src/app/pages/partyaccount/partyaccount-update/partyaccount-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    HighlightDirective,
    PartyaccountAddComponent,
    PartyaccountCardComponent,
    PartyaccountUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root'
})

export class AppModule { }
export class FbBaseService { }