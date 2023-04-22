import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentSvcService {
  private _url: string = 'http://localhost:44342/getjson';

  constructor(private http: HttpClient) {}

  getStudentsData() {
    return this.http.get<{ students: IStudent[] }>(this._url);
  }
}
