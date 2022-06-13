import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  user: User  ;  
  employees: User[] ; 
  constructor(private add : LoginService) {
   this.user = new User("","","","","") ; 
   this.employees = [] ; 
  }

  ngOnInit(): void {
  
  this.showAll(); 
  } 

submit(formulaire:NgForm){ 
  if(formulaire.value._id=="")
  {
//console.log(this.user) ; 
this.add.login(this.user.name,this.user.position,this.user.office,this.user.salary).subscribe((res)=>{
this.reset(formulaire) ; 
console.log("tu as inscris") ; 
console.log(formulaire) ; 
})
  }
  else{ 
    this.edit(this.user) ; 
this.add.update(this.user).subscribe((res)=>{

console.log("updated succesfully") ; 


})



  }
}
reset(formulaire:NgForm){ 
  if (formulaire.dirty) {
this.user.name = " " ; 
this.user.position = " " ; 
this.user.office = " " ; 
this.user.salary = " " ; 
  }
} 

 showAll(){

this.add.show().subscribe((res)=>{

  this.employees=res as User[]  ;  

})

 } 
 edit(emp:User){

this.user=emp; 



 } 
 delete(id:String,formulaire:NgForm){ 
   if(confirm("are you sure?")==true){
this.add.remove(id).subscribe((res)=>{
console.log("removed") ; 
this.showAll() ; 
this.reset(formulaire) ; 
})
let employee  = this.employees.find(employee=>employee._id===id) as User ; 
this.employees.splice(this.employees.indexOf(employee),1)
   }  
 }
}

