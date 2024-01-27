import {Component, Input} from '@angular/core';

export interface Section {
    item: string;
    path: string;
    icon?: string;
    children?: Section[];
}

@Component({
    selector: 'app-side-nav-s',
    templateUrl: './side-nav-s.component.html',
    styleUrl: './side-nav-s.component.css'
})
export class SideNavSComponent {
    @Input() navItems: Section[] = [];

    dropdown(index: number) {
        let x = document.getElementById("childItems" + index);
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
