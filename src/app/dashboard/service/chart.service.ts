import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ChartService implements OnInit {

    constructor(private http: HttpClient) {
    }

    url: string = environment.apiUrl + "/forexApi/";
    options = environment.options;


    ngOnInit(): void {
    }
}
