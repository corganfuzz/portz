import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import { OptabledataService } from '../_services/optabledata/optabledata.service';
// import { FinancialData } from '../_services/optabledata/financialData';
import { IgxGridModule } from 'igniteui-angular';

@Component({
  selector: 'app-operationaltable',
  templateUrl: './operationaltable.component.html',
  styleUrls: ['./operationaltable.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OperationaltableComponent implements OnInit {
  constructor() {
    // this.optableDataService.getData(100000);
    // this.data = this.optableDataService.records;
  }

  @ViewChild('grid1')
  public grid1: IgxGridModule;

  data: any;

  ngOnInit() {
    this.getActualD();
  }

  getActualD() {
    // this.optableDataService.getActualData().subscribe(response => {
    //   console.log(response);
    // });
  }

  formatNumber(value: number) {
    return value.toFixed(2);
  }

  formatCurrency(value: number) {
    return '$' + value.toFixed(2);
  }
}
