import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  user = {
    name: 'Carlos',
    age: 24,
  }

  btnDisable = true
  stateOfButton = 'Seguir'
  onChange (){
    this.stateOfButton = 'Dejar de seguir '
  }
}