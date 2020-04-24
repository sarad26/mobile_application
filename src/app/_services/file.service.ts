import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';
import {report} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor( private http: Http ) { }


  downloadFile(): Observable<any>{
		return this.http.get(`${report.apiUrl}/report/`, {responseType: ResponseContentType.Blob});
  }

}
