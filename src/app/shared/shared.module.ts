import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UsersDetailsFormComponent } from './users-details-form/users-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UsersListingComponent, UsersDetailsFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        UsersDetailsFormComponent,
        UsersListingComponent
    ]
})
export class SharedModule { }
