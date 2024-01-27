import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {Router} from "@angular/router";


export interface Section {
    item: string;
    path: string;
    icon?: string;
    children?: Section[];
}

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent implements OnInit {
    mobileQuery: MediaQueryList;
    topNav: Section[] = [
        {
            item: "Item 1",
            path: "",
            icon: "analytics",
            children: [
                {
                    item: "Item 1.1",
                    icon: "pie_chart",
                    path: "/home"
                },
                {
                    item: "Item 1.2",
                    icon: "show_chart",
                    path: "/setting"
                }
            ]
        },
        {
            item: "Item 2",
            icon: "place",
            path: "."
        },
        {
            item: "Item 3",
            icon: "public",
            path: "."
        },
        {
            item: "Item 4",
            icon: "local_mall",
            path: "."
        },
        {
            item: "Item 5",
            icon: "settings",
            path: ""
        },
    ];

    fillerNav: Section[] = [
        {
            item: "Item 1",
            path: ".",
            icon: "analytics",
            children: [
                {
                    item: "Item 1.1",
                    icon: "pie_chart",
                    path: "./home"
                },
                {
                    item: "Item 1.2",
                    icon: "show_chart",
                    path: "./setting"
                }
            ]
        },
        {
            item: "Item 2",
            icon: "place",
            path: "."
        },
        {
            item: "Item 3",
            icon: "public",
            path: "."
        },
        {
            item: "Item 4",
            icon: "local_mall",
            path: "."
        },
        {
            item: "Item 5",
            icon: "settings",
            path: ""
        },
    ];

    fillerContent = Array.from(
        {length: 1},
        () =>
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    );

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    navigateToNewLink(): void {
        this.router.navigate(['/dashboard/home']);
    }

    changeIcon(): boolean {
        let x = document.getElementById("sidebar-nav");
        if (x != null) {
            return x.style.maxWidth == "";
        } else {
            return false;
        }

    }

    toggleOpen(): void {
        this.drawOpen();
    }

    drawOpen(): void {
        let x = document.getElementById("sidebar-nav");
        if (x != null) {
            if (x.style.maxWidth) {
                // Close the dropdown
                x.style.maxWidth = "";
            } else {
                // Open the dropdown
                x.style.maxWidth = "60px";
            }
        }
    }


    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
    }
}
