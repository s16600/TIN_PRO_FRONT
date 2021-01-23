import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt2';

  constructor(private router:Router) {};

  goHome(){
    this.router.navigate(['home']);
  }

  goPobieranie(){
    this.router.navigate(['pobieranie']);
  }

  goPrzyjmowanie(){
    this.router.navigate(['przyjmowanie']);
  }

  goLaboratoria(){
    this.router.navigate(['laboratoria']);
  }

  goLogowanie(){
    this.router.navigate(['logowanie']);
  }

}
