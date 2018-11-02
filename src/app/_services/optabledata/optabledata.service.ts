import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FinancialData } from './financialData';

@Injectable({
  providedIn: 'root',
})
export class OptabledataService {
  public records: Observable<any[]>;
  private _records: BehaviorSubject<any[]>;

  private _url = '/assets/aamp_data.json';

  constructor(private http: HttpClient) {
    this._records = new BehaviorSubject([]);
    this.records = this._records.asObservable();
  }

  getData(count: number = 100) {
    const financialData: FinancialData = new FinancialData();
    this._records.next(financialData.generateData(count));
  }

  getActualData(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
