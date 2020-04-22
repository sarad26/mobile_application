import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';
import {report} from '@environments/environment';
// import{ DatefilterComponent } from '../home/datefilter/datefilter.component'
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor( private http: Http ) { }


  downloadFile(): Observable<any>{
    // console.log(data);  
		return this.http.get(`${report.apiUrl}/report/`, {responseType: ResponseContentType.Blob});
  }

}
