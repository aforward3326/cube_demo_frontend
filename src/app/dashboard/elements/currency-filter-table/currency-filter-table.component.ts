import {Component, Input} from '@angular/core';
import {ExchangeTransactionDataDtoListModal} from "../../modal/exchangeTransactionDataDtoListModal";
import {MatTableModule} from "@angular/material/table";

@Component({
    selector: 'app-currency-filter-table',
    templateUrl: './currency-filter-table.component.html',
    standalone: true,
    imports: [MatTableModule],
    styleUrl: './currency-filter-table.component.css'
})
export class CurrencyFilterTableComponent {

    displayedColumns: string[] = ['currencyUnit', 'exchangeCurrencyPrice'];
    @Input() currencyToday: ExchangeTransactionDataDtoListModal[] = [];

}
