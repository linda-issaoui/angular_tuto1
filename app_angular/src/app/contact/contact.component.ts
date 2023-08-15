import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  num:any
  ob:Subscription
  constructor(private route:Router, private share:ShareServiceService)
  {
    this.ob=this.share.testObservable().subscribe(obs=>this.num=obs)
  }
  redirection(){
    this.route.navigate(['/profil'])
  }
  ngOnDestroy(){
    console.log("destroy")
    this.ob.unsubscribe()
  }
}
