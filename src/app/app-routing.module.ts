import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import {OrderErrorComponent} from './order-error/order-error.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'en/order', component:FormComponent},
  {path:'order/:status', component: OrderErrorComponent},  
  {path:'**', pathMatch:'full', component: WrongRouteComponent}, // leave it at the buttom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
