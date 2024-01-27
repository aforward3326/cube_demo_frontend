import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CurrencyModal} from "../../modal/currencyModal";
import {SelectDtoModel} from "../../modal/selectDtoModel";

@Injectable({
    providedIn: 'root'
})
export class ForexApiService implements OnInit {

    constructor(private http: HttpClient) {
    }

    url: string = environment.apiUrl + "/forexApi/";
    options = environment.options;

    getYesterdayCurrency() {
        const url = this.url + 'today';
        return this.http.get<CurrencyModal>(url, this.options);
    }

    getCurrencyUnitByDate(date: string | null, currencyUnit: string) {
        const url = this.url + 'getByCurrencyUnit' + '?date=' + date + '&currency=' + currencyUnit;
        return this.http.get<CurrencyModal>(url, this.options);
    }

    getCurrencyUnitSelect() {
        const url = this.url + 'getCurrencySelect';
        return this.http.get<SelectDtoModel>(url, this.options);
    }


    ngOnInit(): void {
    }

}
