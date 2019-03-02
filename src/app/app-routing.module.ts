import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LibraryComponent} from './library/library.component';
import {ModuleDetailComponent} from './module/module.detail.component';
import {PluginComponent} from './plugin/plugin.component';
import {PluginDetailComponent} from './plugin/detail/plugin-detail.component';
import {ModuleSettingComponent} from './module/setting/module-setting.component';



const routes: Routes = [{
    path: '', component: DashboardComponent
}, {
    path: 'library', component: LibraryComponent
}, {
    path: 'module/:id', component: ModuleDetailComponent
}, {
    path: 'module/:id/setting', component: ModuleSettingComponent
}, {
    path: 'plugin', component: PluginComponent
}, {
    path: 'plugin/:id', component: PluginDetailComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
