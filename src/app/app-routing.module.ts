import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PobieranieComponent } from './pobieranie/pobieranie/pobieranie.component';
import { PrzyjmowanieComponent } from './przyjmowanie/przyjmowanie/przyjmowanie.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'pobieranie', component:PobieranieComponent},
  {path: 'przyjmowanie', component:PrzyjmowanieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
