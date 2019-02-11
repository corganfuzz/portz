import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const DATA_URL =
  'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

@Injectable({
  providedIn: 'root',
})
export class RemoteserviceService {
  private listSource = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}

  getData() {
    const apiCall = this.http.get<any>(DATA_URL);
    return apiCall;
  }
}
