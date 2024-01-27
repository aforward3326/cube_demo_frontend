import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';
import {DashboardLayoutRoutingModule} from './layout/dashboard-layout/dashboard-layout-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardLayoutModule} from './layout/dashboard-layout/dashboard-layout.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {RouterOutlet} from "@angular/router";
import {SideNavSComponent} from './nav/side-nav-s/side-nav-s.component';
import {TopNavComponent} from './nav/top-nav/top-nav.component';
import {HomeComponent} from './dashboard/pages/home/home.component';
import {SettingComponent} from './dashboard/pages/setting/setting.component';
import {ChartService} from "./dashboard/service/chart.service";
import {HttpClientModule} from "@angular/common/http";
import {DatePickerComponent} from './component/date-picker/date-picker.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        DashboardLayoutComponent,
        SideNavSComponent,
        SettingComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        DashboardLayoutRoutingModule,
        BrowserAnimationsModule,
        DashboardLayoutModule,
        MatSidenavModule, MatButtonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet, TopNavComponent, HomeComponent, DatePickerComponent
    ],
    providers: [ChartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
