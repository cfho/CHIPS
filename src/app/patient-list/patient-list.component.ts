import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FirebaseService } from "../firebase.service";

import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export interface UserData {
  id?: string;
  MRI?: string;
  updateTime?: number;
}

@Component({
  selector: "app-patient-list",
  templateUrl: "./patient-list.component.html",
  styleUrls: ["./patient-list.component.css"],
})
export class PatientListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  subject$: ReplaySubject<UserData[]> = new ReplaySubject<UserData[]>(1);
  data$: Observable<UserData[]> = this.subject$.asObservable();

  displayedColumns: string[] = ["Hx", "time", "MRI"];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private afService: FirebaseService) {}

  ngOnInit() {
    this.afService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.subject$.next(data);
        // this.dataSource = data;
        // console.log(data);
      });
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(takeUntil(this.destroy$)).subscribe((customers) => {
      console.log(customers);
      this.dataSource.data = customers;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    console.log("💥Destroyed");
}
}
