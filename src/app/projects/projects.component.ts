import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
option:string[]=["All","HTML&CSS","Vanilla JS","React","Angular","Full Stack"];
data:string[]=["HTML&CSS","Vanilla JS","React","Angular","Full Stack","HTML&CSS","Vanilla JS","React","Angular","Full Stack"]
  constructor() { }

  ngOnInit(): void {
  }

handleFilter(val){
  this.data=["HTML&CSS","Vanilla JS","React","Angular","Angular","Full Stack","HTML&CSS","Vanilla JS","React","React","React","Angular","Full Stack"]
  let temp=val.target.value;
  let d=[]
  for(let x of this.data)
  {
    
    if(x===temp)
    d.push(x); 

  }
  if(temp==='All')
  {
    //do nothing

  }
  else
  this.data=d;
  

}

}
