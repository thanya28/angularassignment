import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [//Lazy-loading
  {path : 'orders', component: OrdersComponent,
    loadChildren: () => import ('./orders/orders.module')
    .then(e => e.OrdersModule)
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
