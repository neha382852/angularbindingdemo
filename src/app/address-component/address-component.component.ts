import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
import { Business } from './businees.model';

@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.css']
})
export class AddressComponentComponent implements OnInit {
  user:any;
  businessuser:any;
  @Input('businessuser') businessobj:Business;
  @Input('user') userobj:User;
  constructor() { 
   
  }

  ngOnInit() {
    this.businessuser=
    {
      name:this.businessobj.name,
      address:this.businessobj.address
    };
    this.user = {
      name:this.userobj.name,
      title:this.userobj.title,
      phone:this.userobj.phone
    };
  }

}
