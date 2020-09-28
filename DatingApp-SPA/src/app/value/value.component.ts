import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getValues();
  }

  getValues(): void{
    this.http.get('http://localhost:46187/api/Value')
    .subscribe(res => {
      this.values = res;
    }, err => {
      console.log(err);
    });
  }
}
