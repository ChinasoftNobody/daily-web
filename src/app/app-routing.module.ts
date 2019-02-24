import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LibraryComponent} from './library/library.component';
import {ModuleDetailComponent} from './module/module.detail.component';



const routes: Routes = [{
    path: '', component: DashboardComponent
}, {
    path: 'library', component: LibraryComponent
}, {
    path: 'module/:id', component: ModuleDetailComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
