import { ResponseUsers } from './user.model';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ResponseUsers:ResponseUsers;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers()
       .subscribe(res=>this.ResponseUsers=res);
  }

}
