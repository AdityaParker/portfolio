import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL:string='https://randomuser.me/api/?results=3';


  constructor(private http:HttpClient) { }

  getUsersFromAPI(){
   return this.http.get(this.apiURL);
  }

}
