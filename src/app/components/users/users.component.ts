import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  name:string = "Marc";



  constructor() { }

  ngOnInit() {
    // let me = prompt("please enter your name");
    // let firstLetter = me.charAt(0).toUpperCase();
    // let oldFirstLetter = me.charAt(0);
    // let capitalizedName = me.replace(oldFirstLetter, firstLetter);
    // this.name = capitalizedName;
  }

}
