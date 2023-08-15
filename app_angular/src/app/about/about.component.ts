import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  formi:any
  constructor(private formbuilder:FormBuilder)
  {
    this.formi=this.formbuilder.group({
      name:['',Validators.minLength(3)],
      prenom:[''],
      age:[''],
      arrayItems:this.formbuilder.array([
        this.formbuilder.group({
          id:['1'],
          cin:[''],
          rond:['']
        })
      ])
    })
  }
  get arrayItems()
  {
    return this.formi.get('arrayItems') as FormArray;
  }
  // formi=new FormGroup ({
  //   name:new FormControl(this.formi.name, Validators.required),
  //   prenom:new FormControl(),
  //   age:new FormControl(),
  // })
  add(){
    console.log(this.formi.value)
  }
  addnewitem(){
    let leghtitem=this.arrayItems.length
    let plus= leghtitem++
    let item = this.formbuilder.group({
      id:[plus],
      cin:['cin'+ plus],
      rond:['rond'+ plus]
    })
    this.arrayItems.push(item)
  }
  deleteitem(i:any){
    this.arrayItems.removeAt(i)
    console.log(i)
  }
}
