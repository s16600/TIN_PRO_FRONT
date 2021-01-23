import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  login:any;
  haslo:any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  zaloguj(){

    var user = {
      "login": this.login,
      "haslo": this.haslo
    }

    this.http.post('http://localhost:3001/password',user).subscribe((res:any)=>{
      //console.log(res[0].login);
      sessionStorage.setItem('user', res.login);
    });

    if(sessionStorage.getItem('user')==undefined){
      alert("Błędny login lub hasło");
    }

    this.login='';
    this.haslo='';

    //this.router.navigate(['logowanie']);
  }
  
}

//<input matInput type="password" #second [(ngModel)]='haslo'>
