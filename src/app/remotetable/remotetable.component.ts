import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../_services/remoteops/remoteservice.service';

@Component({
  selector: 'app-remotetable',
  templateUrl: './remotetable.component.html',
  styleUrls: ['./remotetable.component.css'],
})
export class RemotetableComponent implements OnInit {
  remoteData: Observable<any>;

  constructor(private remoteService: RemoteserviceService) {}

  ngOnInit() {
    this.remoteData = this.remoteService.getData();
    // this.remoteService.getData().subscribe(items => {

    //   this.remoteData = items.value;
    // });
  }
}
