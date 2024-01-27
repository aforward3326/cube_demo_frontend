import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {provideMomentDateAdapter} from "@angular/material-moment-adapter";


const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY/MM/dd',
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'YYYY MM ',
        dateA11yLabel: 'DD',
        monthYearA11yLabel: 'YYYY MM ',
    },
};

export const DATE_PICKER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrl: './date-picker.component.css',
    providers: [provideMomentDateAdapter(MY_FORMATS), DATE_PICKER_VALUE_ACCESSOR],
    imports: [MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule, MatButtonModule],
    inputs: ['maxDate', 'minDate', 'date'],
    standalone: true
})
export class DatePickerComponent implements OnChanges, OnInit {

    date: Date | undefined;
    max: Date | undefined;
    min: Date | undefined;
    @Input() defaultDate: string = "";
    @Input() maxDate: string = "";
    @Input() minDate: string = "";

    @Output('dateChange') dateChange = new EventEmitter<string | Date | null>();

    constructor() {
    }

    onAddServer() {
        this.dateChange.emit(this.date);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.onAddServer();
    }

    ngOnInit(): void {
        this.date = new Date(Date.parse(this.defaultDate));
        this.min = new Date(Date.parse(this.minDate));
        this.max = new Date(Date.parse(this.maxDate));
    }


}
