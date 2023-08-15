import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  data={
    name:"zoo",
    age:'29'
  }
  constructor() { }
  print(){
    console.log(this.data.name)
    console.log(this.data.age)
  }
  testObservable(){
    return new Observable((observer:any)=>
    {
      setTimeout(()=>{observer.next("One")},1000)
      setTimeout(()=>{observer.next("two")},2000)
      setTimeout(()=>{observer.next("three")},3000)
      setTimeout(()=>{observer.next("four")},10000)
    })
  }
}
