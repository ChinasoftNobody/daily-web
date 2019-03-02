import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './common/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './common/header/login/login.component';
import {AccordionModule, BsDropdownModule, CollapseModule, ModalModule, PaginationModule, TypeaheadModule} from 'ngx-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import {LibraryComponent} from './library/library.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateModuleComponent} from './dashboard/create/create-module.component';
import {ModuleDetailComponent} from './module/module.detail.component';
import {PluginComponent} from './plugin/plugin.component';
import {UpdatePluginComponent} from './plugin/create/update-plugin.component';
import {PluginDetailComponent} from './plugin/detail/plugin-detail.component';
import {UpdateFieldComponent} from './plugin/detail/updateField/update-field.component';
import {ModuleSettingComponent} from './module/setting/module-setting.component';

@NgModule({
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, DashboardComponent, LoginComponent, LibraryComponent,
        CreateModuleComponent, ModuleDetailComponent, PluginComponent, UpdatePluginComponent, PluginDetailComponent,
        UpdateFieldComponent, ModuleSettingComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule, HttpClientModule, TypeaheadModule.forRoot(),
        AppRoutingModule, FormsModule, ReactiveFormsModule,
        ModalModule.forRoot(), BsDropdownModule.forRoot(), PaginationModule.forRoot(), CollapseModule.forRoot(),
        AccordionModule.forRoot()
    ],
    entryComponents: [LoginComponent, CreateModuleComponent, UpdatePluginComponent, UpdateFieldComponent],
    providers: [CookieService],
    bootstrap: [AppComponent, FooterComponent]
})
export class AppModule {
}
