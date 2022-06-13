import { Injectable } from '@angular/core';
import { User } from './shared/user.model';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private inscription:WebrequestService) { } 
 login(name:String,position:String,office:String,salary:String) {

 return this.inscription.post(name,position,office,salary) ; 





 }

show(){
return this.inscription.get() ; 
 


}
update(emp:User){

return this.inscription.put(emp) ; 



}

remove(_id:String){

  return this.inscription.delete(_id); 



}


}
