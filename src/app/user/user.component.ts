import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
  formgroup:any;
  id:any;
  constructor(private api:ApiService, private router:Router ){}
  ngOnInit(): void {
     this.formgroup = new FormGroup({
      name:new FormControl(""),
      password : new FormControl("")
     });
  }
  submit(data:any){
    if(data.name == "soyab3813@gmail.com" && data.password == "pass@1234"){
      this.router.navigate(['users'])
    }
    else{
      alert("error");
    }
    
  }

}
