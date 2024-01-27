import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardLayoutComponent} from "./dashboard-layout.component";
import {HomeComponent} from "../../dashboard/pages/home/home.component";
import {SettingComponent} from "../../dashboard/pages/setting/setting.component";

const routes: Routes = [
    {
        path: 'dashboard', component: DashboardLayoutComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'setting', component: SettingComponent}
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class DashboardLayoutRoutingModule {
}
