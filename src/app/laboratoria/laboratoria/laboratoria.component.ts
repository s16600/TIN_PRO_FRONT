import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {​​​​ HttpClient }​​​​ from '@angular/common/http';

@Component({
  selector: 'app-laboratoria',
  templateUrl: './laboratoria.component.html',
  styleUrls: ['./laboratoria.component.scss']
})
export class LaboratoriaComponent implements OnInit {

  labs:any;

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3001/laboratoryadress').subscribe((res:any)=>{
      console.log(res);
      this.labs=res;
    })
  }

  dodajLaboratorium(){
    console.log(localStorage.getItem('user'));

    if(sessionStorage.getItem('user')==undefined){
      alert("Proszę się zalogować");
      return;
    }

    this.router.navigate(['nowelab']);
  }

}
