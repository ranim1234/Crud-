import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map' ; 
import 'rxjs/add/operator/toPromise' ; 
import { User } from './shared/user.model';
@Injectable({
  providedIn: 'root'
})
export class WebrequestService {
readonly url : any = 'http://localhost:3200' ; 
  constructor(private http : HttpClient ) { 



  } 

post(name:String,position:String,office:String,salary:String){
return  this.http.post(this.url,{name,position,office,salary})







}

get(){

return this.http.get(this.url) ; 



}

put(emp:User){
return this.http.put(this.url+`/${emp._id}`,emp) ; 





} 
delete(_id:String){
return this.http.delete(this.url+`/${_id}`)  ; 






}



}





