import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { PobieranieComponent } from './pobieranie/pobieranie/pobieranie.component';
import { PrzyjmowanieComponent } from './przyjmowanie/przyjmowanie/przyjmowanie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { DaneprobyComponent } from './daneproby/daneproby.component';
import { LaboratoriaComponent } from './laboratoria/laboratoria/laboratoria.component';
import { NowelabComponent } from './nowelab/nowelab/nowelab.component';
import { LogowanieComponent } from './logowanie/logowanie/logowanie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PobieranieComponent,
    PrzyjmowanieComponent,
    DaneprobyComponent,
    LaboratoriaComponent,
    NowelabComponent,
    LogowanieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
