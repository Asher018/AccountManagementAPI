import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from  '@angular/fire';
import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { AngularFireAuthModule } from  '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeModule } from './pages/home/home.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HomeModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root'
})

export class AppModule { }
export class FbBaseService { }