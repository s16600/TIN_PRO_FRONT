import { Component, OnInit } from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //sample:any; //nrserii:any

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
    //var sample: { numerSerii: any; numerProby: any; nazwaMaterialu: any; symbolMagazynowy: any; rodzajProby: any; numerSpecyfikacji: any; };
    
    var sample:any;
    sample.numerSerii=this.numerSerii;
    sample.numerProby=this.numerProby;
    sample.nazwaMaterialu=this.nazwaMaterialu;
    sample.symbolMagazynowy=this.symbolMagazynowy;
    sample.rodzajProby=this.rodzajProby;
    sample.numerSpecyfikacji=this.numerSpecyfikacji;
    //console.log("Zlec badanie", sample);

    this.http.post('http://localhost:3001/sample',sample).subscribe((res:any)=>{
      console.log(res);
    })
    
  }

}
