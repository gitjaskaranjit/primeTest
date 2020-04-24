import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeTest';
  cities: City[];
  constructor(){
 this.cities=[
   {
     Id:1,
     Name: "Toronto"
   },
   {
     Id:2,
     Name:"Brampton"
   },
   {
     Id:3,
     Name:"Missisauga"
   },
   {
    Id:4,
    Name:"Calgary"
  }
 ]
  }
  form = new FormGroup({
    selectedCity : new FormControl('')
  });
  
}
interface City{
  Id: number
  Name: string;
}
