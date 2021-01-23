import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';

@Component({
  selector: 'app-przyjmowanie',
  templateUrl: './przyjmowanie.component.html',
  styleUrls: ['./przyjmowanie.component.scss']
})
export class PrzyjmowanieComponent implements OnInit {

  numerSerii:any;
  numerProby:any;
  nazwaMaterialu:any;
  symbolMagazynowy:any;
  rodzajProby:any;
  numerSpecyfikacji:any;

  numerSeriiWybranejProby:any;
  numerProbyWybranejProby:any;
  nazwaMaterialuWybranejProby:any;
  symbolMagazynowyWybranejProby:any;
  rodzajProbyWybranejProby:any;
  numerSpecyfikacjiWybranejProby:any;
  wielkoscProbyWybranejProby:any;

  wybranaProba:any;
  mySample:any;
  dystrybucja:any;

  samples:any;
  labs:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3001/sampled').subscribe((res:any)=>{
      this.samples=res;
      console.log(res);
    })
  }

  wyswietl_szczegoly(id:any){

    this.wybranaProba=id;

    this.http.get('http://localhost:3001/'+id+'/sampled_1').subscribe((res:any)=>{
          this.numerSeriiWybranejProby=res.numerSerii;
          this.numerProbyWybranejProby=res.numerProby;
          this.nazwaMaterialuWybranejProby=res.nazwaMaterialu;
          this.symbolMagazynowyWybranejProby=res.symbolMagazynowy;
          this.rodzajProbyWybranejProby=res.rodzajProby;
          this.numerSpecyfikacjiWybranejProby=res.numerSpecyfikacji;
          this.wielkoscProbyWybranejProby=res.wielkoscProby.$numberDecimal;
          
          this.mySample=res; 
          //console.log(res);
      });

    this.http.get('http://localhost:3001/laboratory').subscribe((res:any)=>{
      this.labs=res;
    });


    this.http.get('http://localhost:3001/'+id+'/distribute').subscribe((res:any)=>{
    //this.http.get('http://localhost:3001/600b6f83ee8c382464de4587/distribute').subscribe((res:any)=>{
      this.dystrybucja=res;
      console.log(res);
    });

    //https://www.techiediaries.com/angular-material-login-form-modal-dialog/
  }

  przydziel_probe(id:any){

    if(sessionStorage.getItem('user')==undefined){
      alert("Proszę się zalogować");
      return;
    }

    var wielkoscProby = prompt("Podaj wielkość próby");

    if (wielkoscProby==null) return;

    if (parseInt(wielkoscProby)>this.wielkoscProbyWybranejProby) {
      alert("Przekroczono wielkość próby do rozdzielenia");
      return;
    }
      
    var sample = {
        "wielkoscProby": wielkoscProby
    }
    
    this.http.post('http://localhost:3001/' + this.wybranaProba + '/' + id + '/distribute',sample).subscribe((res:any)=>{
      //console.log(res);
    });

    this.wyswietl_szczegoly(this.wybranaProba);
  }

}