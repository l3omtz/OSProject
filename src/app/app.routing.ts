// GET THE ROUTER MODULES SO WE CAN USE THEM
import {Router, RouterModule} from '@angular/router';

// IMPORT COMPONENTS WE WANT TO ROUTE TO
import { HomeComponent } from './home.component';
import { OrdersComponent } from './orders/orders.component';
import { AddUserComponent } from './users/add-user.component';

// EXPORT THEM WITH PATH TO USE OUTSIDE UUNIVERSAL
export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'orders', component: OrdersComponent }
]);
