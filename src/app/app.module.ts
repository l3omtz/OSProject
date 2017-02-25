import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { routing } from './app.routing';
import { UsersRouting } from './users/users.routing';

import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        UsersModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        OrdersModule,
        UsersRouting,
        routing
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
