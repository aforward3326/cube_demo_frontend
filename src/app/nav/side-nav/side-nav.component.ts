import {Component, Input} from '@angular/core';

export interface Section {
    item: string;
    path: string;
    icon?: string;
    children?: Section[];
}

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
    @Input() navItems: Section[] = [];

    dropdown(index: number) {
        let x = document.getElementById("childrenItems" + index);
        if (x != null) {
            if (x.style.maxHeight) {
                // Close the dropdown
                x.style.maxHeight = "";
            } else {
                // Open the dropdown
                x.style.maxHeight = x.scrollHeight + "px";
            }
        }
    }

}
