import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';

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

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3001/sample').subscribe((res:any)=>{
      console.log(res);

      this.numerSerii = '1';
    })


  }

}
