import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = 10;
  data: string = '';
  getAlert(){
    alert("OMG Aleart in angular, but its not avalible in React lol")
  }
  doTheThing(val: string){
    this.data = val;
  }
}
