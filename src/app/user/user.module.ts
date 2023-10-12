import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
