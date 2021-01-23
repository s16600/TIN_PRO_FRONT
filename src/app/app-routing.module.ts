import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PobieranieComponent } from './pobieranie/pobieranie/pobieranie.component';
import { PrzyjmowanieComponent } from './przyjmowanie/przyjmowanie/przyjmowanie.component';
import { LaboratoriaComponent } from './laboratoria/laboratoria/laboratoria.component';
import { NowelabComponent } from './nowelab/nowelab/nowelab.component';
import { LogowanieComponent } from './logowanie/logowanie/logowanie.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'pobieranie', component:PobieranieComponent},
  {path: 'przyjmowanie', component:PrzyjmowanieComponent},
  {path: 'laboratoria', component:LaboratoriaComponent},
  {path: 'nowelab', component:NowelabComponent},
  {path: 'logowanie', component:LogowanieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
