import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
//import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'userCreate', component: UserCreateComponent},
  {path: 'userEdit/:id', component: UserEditComponent},
  {path: 'userDetails/id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
