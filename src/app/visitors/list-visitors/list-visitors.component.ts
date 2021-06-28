import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-list-visitors',
  templateUrl: './list-visitors.component.html',
  styleUrls: ['./list-visitors.component.scss']
})
export class ListVisitorsComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable', {static: false}) table;
  dataTable: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();

  }


}
