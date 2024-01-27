import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from '../../nav/side-nav/side-nav.component';
import {MatListItem, MatListModule} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable} from "@angular/material/table";
import {CurrencyDateFilterComponent} from '../../dashboard/elements/currency-date-filter/currency-date-filter.component';
import {DatePickerComponent} from "../../component/date-picker/date-picker.component";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";


@NgModule({
    declarations: [SideNavComponent],
    exports: [
        SideNavComponent,
        CurrencyDateFilterComponent,
    ],
    imports: [
        CommonModule,
        MatListItem,
        RouterLink,
        MatListModule,
        MatIcon,
        RouterLinkActive,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        DatePickerComponent,
        MatFormField,
        MatSelect,
        MatOption,
        CurrencyDateFilterComponent
    ]
})
export class DashboardLayoutModule {
}
