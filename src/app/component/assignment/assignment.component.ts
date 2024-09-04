import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatSortModule, MatPaginatorModule, FormsModule],
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'completed'];
  dataSource = new MatTableDataSource<any>([]);
  filterValue: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchData(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.dataSource.data = response;
        console.log('Data fetched:', this.dataSource.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
