import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-pobieranie',
  templateUrl: './pobieranie.component.html',
  styleUrls: ['./pobieranie.component.scss']
})
export class PobieranieComponent implements OnInit {

  numerSerii:any;
  numerProby:any;
  nazwaMaterialu:any;
  symbolMagazynowy:any;
  rodzajProby:any;
  numerSpecyfikacji:any;

  samples:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3001/sample').subscribe((res:any)=>{
      //console.log(res);
      this.samples=res;
    })
  }

  pobierz(id:any){
    if(sessionStorage.getItem('user')==undefined){
      alert("Proszę się zalogować");
      return;
    }

    var wielkoscProby = prompt("Podaj wielkość próby");

    if (wielkoscProby!=null){
      var sample = {
        "_id": id,
        "wielkoscProby": wielkoscProby
      }
  
      this.http.post('http://localhost:3001/'+id+'/take',sample).subscribe((res:any)=>{
          console.log(res);
      });
    }

    //https://www.techiediaries.com/angular-material-login-form-modal-dialog/
  }

}
