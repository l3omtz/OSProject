import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OrdersComponent } from './orders/orders.component';
export var routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'orders', component: OrdersComponent }
]);
//# sourceMappingURL=../../../src/app/app.routing.js.map