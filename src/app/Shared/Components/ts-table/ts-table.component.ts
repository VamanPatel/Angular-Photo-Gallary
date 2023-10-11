import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Column } from '../../Modals/Column.Modal';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'ts-table',
  templateUrl: './ts-table.component.html',
  styleUrls: ['./ts-table.component.css'],
})
export class TsTableComponent implements OnInit, AfterViewInit {
  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<any> = [];
  @Input() isPaginator: boolean = false;
  @Input() isSelectable: boolean = false;

  public columnNames: any[] = [];

  displayedColumns: Array<Column> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  selectedRow: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}
  ngOnInit() {
    this.displayedColumns = this.tableColumns;
    this.dataSource = new MatTableDataSource(this.tableData);
    console.log(this.displayedColumns);
    console.log(this.dataSource);

    for (const column of this.displayedColumns) {
      this.columnNames.push(column.headerData);
    }
    this.columnNames.unshift('Select');
    console.log(this.columnNames);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(e: any) {
    const filterValue = (e.target as HTMLInputElement).value;

    const filterData = this.tableData.slice().filter((i, index) => {
      return (
        i.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        i.email.toLocaleLowerCase().includes(filterValue.toLowerCase())
      );
    });

    console.log(filterData);

    this.dataSource = new MatTableDataSource(filterData);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  rowSelect(e: any, data: any) {
    console.log(e);
    console.log(data);

    if (e.checked) {
      this.selectedRow.push(data);
    } else {
      let index = this.selectedRow.findIndex((i) => i.id == data.id);
      this.selectedRow.splice(index, 1);
    }

    console.log(this.selectedRow);
  }

  rowAlert(row: any) {
    console.log(row);

    alert(`You have clicked on ${row.name}`);
  }

  saveData() {
    console.log(this.tableData);
  }

  addData() {}

  deleteData() {
    let indexes = this.selectedRow.map((i) => i.id);

    let data = this.tableData.slice();
    indexes.forEach((f) => {
      const singleIndex = this.tableData.findIndex((j) => j.id == f);
      data.splice(singleIndex, 1);
    });
    this.dataSource = new MatTableDataSource(data);
  }

  buttonClick(e: any) {
    console.log(e);
  }
}
