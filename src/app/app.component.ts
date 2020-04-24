import { Component } from '@angular/core';

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
   }
 ]
  }
}
interface City{
  Id: number
  Name: string;
}
