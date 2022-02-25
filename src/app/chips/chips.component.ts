import { Component, OnInit, Inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import { FirebaseService } from "../firebase.service";
import { ActivatedRoute, Router } from "@angular/router";
import { throwIfEmpty } from "rxjs/operators";
// import { RouterModule, Routes } from '@angular/router';

import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-chips",
  templateUrl: "./chips.component.html",
  styleUrls: ["./chips.component.css"],
})
export class ChipsComponent implements OnInit {
  // items;
  checkoutForm;
  totalprice;
  interpreter$;
  reader;
  data;
  A_sum;

  constructor(
    private formBuilder: FormBuilder,
    private afService: FirebaseService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      reader: "",
      study_date: "",
      hisnum: "",
      accessnum: "",
      A_RT_ANT: 0,
      A_LT_ANT: 0,
      A_RT_POST: 0,
      A_LT_POST: 0,
      B_RT_ANT: 0,
      B_LT_ANT: 0,
      B_RT_POST: 0,
      B_LT_POST: 0,
      B_RT_Cingulate: 0,
      B_LT_Cingulate: 0,
      C_RT_ANT: 0,
      C_LT_ANT: 0,
      C_RT_POST: 0,
      C_LT_POST: 0,
      C_RT_Cingulate: 0,
      C_LT_Cingulate: 0,
      D_RT_ANT: 0,
      D_LT_ANT: 0,
      D_RT_POST: 0,
      D_LT_POST: 0,
      MTA_RT: 0,
      MTA_LT: 0,
    });
  }

  ngOnInit() {
    // console.log(this.totalprice);
    this.route.paramMap.subscribe((params) => {
      this.reader = params.get("Id");
      console.log(this.reader);
      if (this.reader) {
        this.getStudyByReader(this.reader);
        console.log(this.reader);
      } else {
        console.log("null");
      }
      // this.getStudy(this.hisnum)
    });
    this.interpreter$ = this.afService.getInterpreter();
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ChipsDialog, {
      data: { reader: this.reader },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.delete();
      // console.log(`Dialog result: ${result}`);
    });
  }

  openDialog(action: string) {
    const dialogRef = this.dialog.open(ChipsDialog, {
      data: { action: action },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == "save") {
        this.onSubmit();
      } else if (result == "delete") {
        this.delete();
      } 
    });
  }

  getStudyByReader(reader) {
    this.afService.getStudyByReader(reader).subscribe((value) => {
      if (value) {
        this.data = value;
        this.checkoutForm.setValue({
          reader: this.data.reader,
          study_date: this.data.date,
          hisnum: this.data.hisnum,
          accessnum: this.data.accessnum,
          A_RT_ANT: this.data.A_RT_ANT,
          A_LT_ANT: this.data.A_LT_ANT,
          A_RT_POST: this.data.A_RT_POST,
          A_LT_POST: this.data.A_LT_POST,
          B_RT_ANT: this.data.B_RT_ANT,
          B_LT_ANT: this.data.B_LT_ANT,
          B_RT_POST: this.data.B_RT_POST,
          B_LT_POST: this.data.B_LT_POST,
          B_RT_Cingulate: this.data.B_RT_Cingulate,
          B_LT_Cingulate: this.data.B_LT_Cingulate,
          C_RT_ANT: this.data.C_RT_ANT,
          C_LT_ANT: this.data.C_LT_ANT,
          C_RT_POST: this.data.C_RT_POST,
          C_LT_POST: this.data.C_LT_POST,
          C_RT_Cingulate: this.data.C_RT_Cingulate,
          C_LT_Cingulate: this.data.C_LT_Cingulate,
          D_RT_ANT: this.data.D_RT_ANT,
          D_LT_ANT: this.data.D_LT_ANT,
          D_RT_POST: this.data.D_RT_POST,
          D_LT_POST: this.data.D_LT_POST,
          MTA_RT: this.data.MTA_RT,
          MTA_LT: this.data.MTA_LT,
        });
      }
    });
  }

  onSubmit() {
    const customerData = this.checkoutForm.value;
    // Process checkout data here
    customerData["A_subtotal"] =
      (Number(customerData.A_LT_ANT) +
        Number(customerData.A_RT_ANT) +
        Number(customerData.A_LT_POST) +
        Number(customerData.A_RT_POST)) *
      1;
    customerData["B_subtotal"] =
      (Number(customerData.B_LT_ANT) +
        Number(customerData.B_RT_ANT) +
        Number(customerData.B_LT_POST) +
        Number(customerData.B_RT_POST) +
        Number(customerData.B_LT_Cingulate) +
        Number(customerData.B_RT_Cingulate)) *
      2;
    customerData["C_subtotal"] =
      (Number(customerData.C_LT_ANT) +
        Number(customerData.C_RT_ANT) +
        Number(customerData.C_LT_POST) +
        Number(customerData.C_RT_POST) +
        Number(customerData.C_LT_Cingulate) +
        Number(customerData.C_RT_Cingulate)) *
      3;
    customerData["D_subtotal"] =
      (Number(customerData.D_LT_ANT) +
        Number(customerData.D_RT_ANT) +
        Number(customerData.D_LT_POST) +
        Number(customerData.D_RT_POST)) *
      4;
    customerData["CHIPS"] =
      customerData["A_subtotal"] +
      customerData["B_subtotal"] +
      customerData["C_subtotal"] +
      customerData["D_subtotal"];
    customerData["MTA"] =
      Number(customerData["MTA_RT"]) + Number(customerData["MTA_LT"]);

    let unixTimestamp = Date.parse(customerData.study_date); // convert datepicker data into unix timestamp and save on database
    let date = new Date(customerData.study_date);
    customerData["date"] = date.toISOString();
    customerData["study_date"] = unixTimestamp;
    this.afService.add(customerData);
    // this.checkoutForm.reset();
  }

  delete() {
    // console.log(this.reader)
    const oldString = this.reader;
    const arr = oldString.split('/');
    arr.pop();
    const pushString = this.checkoutForm.value.accessnum + '_' + this.checkoutForm.value.reader;
    arr.push(pushString);
    const reader = arr.join('/');
    const id = String(reader).substring(0, reader.indexOf('/'))
    console.log(id);
    this.router.navigate(["study-detail/" + id]);
    console.log(reader);
    this.afService.deleteByReader(reader);
  }
}

@Component({
  selector: "chips-dialog",
  templateUrl: "chips-dialog.html",
})
export class ChipsDialog {
  @Output() save = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ChipsDialog>
  ) {}

  onNoClick(): void {
    this.dialogRef.close("cancel");
  }
}
