import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './common/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {LoginComponent} from './common/header/login/login.component';

@NgModule({
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, DashboardComponent, LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, ModalModule
    ],
    entryComponents: [LoginComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
