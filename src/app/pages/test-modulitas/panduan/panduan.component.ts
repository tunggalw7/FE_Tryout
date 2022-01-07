import { Component, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from "../../../_services/master.service";

@Component({
  selector: 'panduan',
  styleUrls: ['./panduan.component.scss'],
  templateUrl: './panduan.component.html',
})
export class PanduanComponent implements OnDestroy, OnInit {

    constructor(
      private masterService: MasterService
    ) {}

    ngOnInit() {
    }

    ngOnDestroy() {
    }
  
}