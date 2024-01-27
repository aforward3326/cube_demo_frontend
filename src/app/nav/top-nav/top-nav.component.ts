import {Component, Input} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {CdkMenu, CdkMenuBar, CdkMenuGroup, CdkMenuItem, CdkMenuItemCheckbox, CdkMenuItemRadio, CdkMenuTrigger} from "@angular/cdk/menu";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

export interface Section {
    item: string;
    path: string;
    icon?: string;
    children?: Section[];
}

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrl: './top-nav.component.css',
    imports: [MatButtonModule, MatMenuModule, CdkMenuBar,
        CdkMenuItem,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuGroup,
        CdkMenuItemCheckbox,
        CdkMenuItemRadio, NgForOf, RouterLink,],
    standalone: true
})
export class TopNavComponent {
    @Input() navItems: Section[] = []
    protected readonly toolbar = toolbar;
}
