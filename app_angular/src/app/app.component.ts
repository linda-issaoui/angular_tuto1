import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom="LOTFI"
  id=5
  contry="TUNISIE"
  title = 'app_angular'
  event!: any[];
  printData(event:string)
  {
    console.log(event)
  }
}
