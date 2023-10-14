import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component:AuthComponent},
  {path:'dashboard', component: PagesComponent,
    children: [
      {path: 'user',
        loadChildren:() => import('./user/user.module').then(m => m.UserModule)
      }
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
