import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/models';

@Component({
    selector: 'app-users-details-form',
    templateUrl: './users-details-form.component.html',
    styleUrls: ['./users-details-form.component.scss']
})
export class UsersDetailsFormComponent implements OnInit, OnChanges {
    @Input() userDetail: User;
    userForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() { }

    ngOnChanges(){
        if (this.userDetail){
            this.initializeUserForm();
        }
    }

    initializeUserForm(){
        this.userForm = this.formBuilder.group({
            name: this.userDetail ? this.userDetail.name : null,
            username: this.userDetail ? this.userDetail.username : null,
            street: this.userDetail && this.userDetail.address ? this.userDetail.address['street'] : null,
            city: this.userDetail && this.userDetail.address ? this.userDetail.address['city'] : null
        })
    }
}
