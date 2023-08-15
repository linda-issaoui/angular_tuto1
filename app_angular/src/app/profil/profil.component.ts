import {NgForm} from '@angular/forms'
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  getNom=''
  getId=''
  getContry=''
  constructor (private route:ActivatedRoute)
  {
    this.route.queryParams.subscribe(data=>{
      this.getNom=data['nom']
      this.getId=data['id']
      this.getContry=data['contry']
    })
  }
  f(formu:NgForm)
  {
    let data = formu.value
    console.log(data)
  }
}
