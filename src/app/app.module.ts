import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './common/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './common/header/login/login.component';
import {BsDropdownModule, CollapseModule, ModalModule, PaginationModule, TypeaheadModule} from 'ngx-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import {LibraryComponent} from './library/library.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, DashboardComponent, LoginComponent, LibraryComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule, HttpClientModule, TypeaheadModule.forRoot(),
        AppRoutingModule, FormsModule, ReactiveFormsModule,
        ModalModule.forRoot(), BsDropdownModule.forRoot(), PaginationModule.forRoot(), CollapseModule.forRoot()
    ],
    entryComponents: [LoginComponent],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
