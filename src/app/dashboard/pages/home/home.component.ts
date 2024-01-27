import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeTransactionDataDtoListModal} from "../../modal/exchangeTransactionDataDtoListModal";
import {MatTableModule} from "@angular/material/table";
import {ForexApiService} from "../../service/forexApi/forex-api.service";
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {DatePickerComponent} from "../../../component/date-picker/date-picker.component";
import {FormsModule} from "@angular/forms";
import {formatDate} from "@angular/common";
import {DashboardLayoutModule} from "../../../layout/dashboard-layout/dashboard-layout.module";
import {CurrencyFilterTableComponent} from "../../elements/currency-filter-table/currency-filter-table.component";
import {SelectModel} from "../../modal/selectModel";
import {valueElement} from "../../elements/currency-date-filter/currency-date-filter.component";

const moment = _rollupMoment || _moment;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MatTableModule, DatePickerComponent, FormsModule, DashboardLayoutModule, CurrencyFilterTableComponent],
    standalone: true
})
export class HomeComponent implements OnInit {
    constructor(private http: HttpClient, private forexApiService: ForexApiService) {
    }

    /*default*/
    yesterday: string = formatDate(new Date(new Date().setDate(new Date().getDate() - 1)), "yyyy/MM/dd", "en");
    currencySelect: string = "NTD";
    /*filter*/
    date: Date | string | null = this.yesterday;
    currencyUnit: string = 'NTD';
    filterData: valueElement = {
        date: this.yesterday,
        currencyUnit: "NTD"
    }

    onSetFilterDate(setValue: valueElement) {
        if (setValue) {
            this.getCurrencyUnitByDate(setValue.date, setValue.currencyUnit);
        }
    }

    currencyToday: ExchangeTransactionDataDtoListModal[] = [];
    currencyUnitByOne: ExchangeTransactionDataDtoListModal[] = [];
    currencyUnitByDate: ExchangeTransactionDataDtoListModal[] = [];
    currencyUnitSelect: SelectModel[] = [];

    displayedColumns: string[] = ['date', 'currencyUnit', 'currencyPrice', 'exchangeCurrencyUnit', 'exchangeCurrencyPrice'];


    // getYesterdayData() {
    //     this.forexApiService.getYesterdayCurrency().subscribe((res) => {
    //         if (res.exchangeTransactionDataDtoList) {
    //             this.currencyToday = res.exchangeTransactionDataDtoList;
    //         }
    //     })
    // }

    getCurrencyUnitByDate(date: string | null, currencyUnit: string) {
        this.forexApiService.getCurrencyUnitByDate(date, currencyUnit).subscribe((res) => {
            if (res.exchangeTransactionDataDtoList) {
                this.currencyToday = res.exchangeTransactionDataDtoList;
            }
        })
    }

    getCurrencyUnitSelect() {
        this.forexApiService.getCurrencyUnitSelect().subscribe((res) => {
            if (res) {
                this.currencyUnitSelect = res.result.select;
            }
        })
    }

    ngOnInit(): void {
        this.getCurrencyUnitSelect();
    }

}
