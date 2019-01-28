import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ModalModule} from 'ngx-bootstrap';

const routes: Routes = [{
    path: '', component: DashboardComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes), ModalModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
