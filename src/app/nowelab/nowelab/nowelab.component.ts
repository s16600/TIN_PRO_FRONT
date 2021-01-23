import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';

@Component({
  selector: 'app-nowelab',
  templateUrl: './nowelab.component.html',
  styleUrls: ['./nowelab.component.scss']
})
export class NowelabComponent implements OnInit {

  nazwa:any;
  miejscowosc:any;
  ulica:any;
  numer:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  dodajLaboratorium(){
    if(sessionStorage.getItem('user')==undefined){
      alert("Proszę się zalogować");
      return;
    }


    var lab = {
      "nazwa": this.nazwa,
      "miejscowosc": this.miejscowosc,
      "ulica": this.ulica,
      "numer": this.numer
    }

    this.http.post('http://localhost:3001/laboratory',lab).subscribe((res:any)=>{
      console.log(res);
    })    

    this.nazwa=' ';
    this.miejscowosc=' ';
    this.ulica=' ';
    this.numer=' ';

  }

}
