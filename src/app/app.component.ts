import { Component } from '@angular/core';
import { User } from './address-component/user.model';
import { Business } from './address-component/businees.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputtext:string ="neha";
  user:User;
  businessuser:Business;
 constructor()
 {
   this.businessuser=new Business();
   this.businessuser.address="7547584769";
   this.businessuser.name="qwerty";
   this.user = new User();
   this.user.name="ash";
   this.user.title="sd";
   this.user.phone = [
     '1234546'
   ]
 }
}
