import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../shared/models/models';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User[];
    selectUser: User;
    constructor(
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.getUsersData();
    }

    // Get Users Data
    getUsersData(){
        this.usersService.get().subscribe(
            (res: User[]) => {
                this.users = res ? res : [];
            }, error => {
                console.log(error);
            }
        )
    }
    getUserDetail(user: User){
        this.selectUser = user;
    }

}
