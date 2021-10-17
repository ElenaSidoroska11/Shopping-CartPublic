import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import{ShoppingCardComponent} from './components/shopping-card/shopping-card.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes:Routes=[
  {path:'',redirectTo:'/login' ,pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shop' ,component:ShoppingCardComponent},
  {path:'**' ,component:PageNotFoundComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
