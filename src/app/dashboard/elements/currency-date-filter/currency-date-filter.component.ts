import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {formatDate} from "@angular/common";
import {SelectModel} from "../../modal/selectModel";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {DatePickerComponent} from "../../../component/date-picker/date-picker.component";
import {of} from "rxjs";

export interface valueElement {
    date: string,
    currencyUnit: string
}

@Component({
    selector: 'app-currency-date-filter',
    templateUrl: './currency-date-filter.component.html',
    styleUrl: './currency-date-filter.component.css',
    imports: [MatFormFieldModule, MatSelectModule, FormsModule, DatePickerComponent,],
    standalone: true
})
export class CurrencyDateFilterComponent implements OnChanges, OnInit {
    value: valueElement = {
        date: "",
        currencyUnit: ""
    }

    @Input() selectValue: SelectModel[] = [];

    max: string = "";
    min: string = "";
    @Input() maxDate: string = "";
    @Input() minDate: string = "";
    @Input() input: valueElement = {
        date: "",
        currencyUnit: ""
    }
    @Output() valueChange = new EventEmitter<valueElement>();

    onSetFilterDate(setDate: Date | string | null) {
        if (setDate) {
            this.value.date = formatDate(setDate, "yyyy/MM/dd", "en");
            this.onAddServer();
        }
    }

    onSetCurrencyUnit() {
        console.log(this.value.currencyUnit)
        if (this.value.currencyUnit) {
            this.onAddServer();
        }
    }

    onAddServer() {
        this.valueChange.emit(this.value);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.onAddServer();
    }

    ngOnInit(): void {
        this.max = this.maxDate;
        this.min = this.minDate;
        this.value = this.input;
    }

    protected readonly of = of;
}
