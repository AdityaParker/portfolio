import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customers-api',
  templateUrl: './customers-api.component.html',
  styleUrls: ['./customers-api.component.css']
})
export class CustomersApiComponent implements OnInit {
data:any;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
   this.service.getUsersFromAPI().subscribe(d=>this.data=d);
   console.log(JSON.stringify(this.data));
   
  }

}
