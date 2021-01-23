import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numerSerii:any;
  numerProby:any;
  nazwaMaterialu:any;
  symbolMagazynowy:any;
  rodzajProby:any;
  numerSpecyfikacji:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  zlecBadanie(){

    //docelowo localStorage
    if(sessionStorage.getItem('user')==undefined){ 
      alert("Proszę się zalogować");
      return;
    }

    if (this.numerSerii=='') {
      return;
    }

    var sample = {
      "numerSerii": this.numerSerii,
      "numerProby": this.numerProby,
      "nazwaMaterialu": this.nazwaMaterialu,
      "symbolMagazynowy": this.symbolMagazynowy,
      "rodzajProby": this.rodzajProby,
      "numerSpecyfikacji": this.numerSpecyfikacji
    }

    this.http.post('http://localhost:3001/sample',sample).subscribe((res:any)=>{
      console.log(res);
    })
    
    this.numerSerii='';
    this.numerProby='';
    this.nazwaMaterialu='';
    this.symbolMagazynowy='';
    this.rodzajProby='';
    this.numerSpecyfikacji='';
  }

}
 