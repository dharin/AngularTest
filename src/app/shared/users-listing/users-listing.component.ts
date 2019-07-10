import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/models';

@Component({
    selector: 'app-users-listing',
    templateUrl: './users-listing.component.html',
    styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {
    @Input() users: User[];
    @Output() userDetail = new EventEmitter();
    selectedUser: User;

    constructor() { }

    ngOnInit() {
    }

    selectUser(user){
        this.selectedUser = user;
        this.userDetail.emit(user);
    }
}
