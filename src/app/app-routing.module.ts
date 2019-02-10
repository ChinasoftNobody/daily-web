import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LibraryComponent} from './library/library.component';


const routes: Routes = [{
    path: '', component: DashboardComponent
}, {
    path: 'library', component: LibraryComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
