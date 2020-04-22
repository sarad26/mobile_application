import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment, report} from '@environments/environment';
import { User } from '@app/_models';
// import{ DatefilterComponent } from '../home/datefilter/datefilter.component'
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    // AgGrid
    getDatafilter(data) {
        console.log(data);        
        return this.http.get<any>(`${report.apiUrl}/report/`,data);
        // return this.http.get<any>(`${report.apiUrl}/report/22.04.20`);
    }
     getDatacurrent(){
        return this.http.get<any>(`${report.apiUrl}/report/`);
    }
}