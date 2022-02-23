import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-study-detail',
  templateUrl: './study-detail.component.html',
  styleUrls: ['./study-detail.component.css']
})
export class StudyDetailComponent implements OnInit {
  hisnum;
  items = [];
  readers;

  tiles: Tile[] = [
    {text: '', cols: 2, rows: 2, color: 'white'},
    {text: 'A', cols: 2, rows: 1, color: '#0288ee'},
    {text: 'B', cols: 2, rows: 1, color: '#0288ee'},
    {text: 'C', cols: 2, rows: 1, color: '#0288ee'},
    {text: 'D', cols: 2, rows: 1, color: '#0288ee'},
    {text: 'MTA', cols: 2, rows: 1, color: '#0288ee'},
    {text: 'R', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'L', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'R', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'L', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'R', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'L', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'R', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'L', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'R', cols: 1, rows: 1, color: '#36a5fd'},
    {text: 'L', cols: 1, rows: 1, color: '#36a5fd'},
  ];

  data: Tile[] = [
    {text: 'reader', cols: 2, rows: 1, color: '#36a5fd'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'C', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'C', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'M', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'M', cols: 1, rows: 1, color: '#e3f2fe'},

    {text: 'CHIPS', cols: 2, rows: 1, color: '#36a5fd'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'C', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'C', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'MTA', cols: 2, rows: 1, color: '#36a5fd'},

    {text: 'rating', cols: 2, rows: 1, color: '#ee0288'},
    {text: 'A', cols: 2, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'A', cols: 1, rows: 1, color: '#e3f2fe'},
    {text: 'C', cols: 2, rows: 1, color: '#e3f2fe'},
    {text: 'rating', cols: 2, rows: 1, color: '#ee0288'},
  ];


  constructor(
    private route: ActivatedRoute,
    private afService: FirebaseService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.hisnum = params.get("Id");
      this.getStudy(this.hisnum)
    });
    this.readers = this.afService.readers;
  }

  getStudy(HxNum) {
    this.afService.getMRIbyHx(HxNum)
    .subscribe(data => {
      let newdata = [];
      data.forEach((value, index) => {
        // console.log(data);
        newdata.push(this.reArrangeData(value));
      })
      this.items = newdata;
    })
  }

  reArrangeData(value) {
    let arr = [];
      arr.push(value.reader);
      arr.push(value.A_RT_ANT);
      arr.push(value.A_LT_ANT);
      arr.push(value.B_RT_ANT);
      arr.push(value.B_LT_ANT);
      arr.push(value.C_RT_Cingulate);
      arr.push(value.C_LT_Cingulate);
      arr.push(value.D_RT_ANT);
      arr.push(value.D_LT_ANT);
      arr.push(value.MTA_RT);
      arr.push(value.MTA_LT);
      arr.push('CHIPS');
      arr.push(value.A_RT_POST);
      arr.push(value.A_LT_POST);
      arr.push(value.B_RT_POST);
      arr.push(value.B_LT_POST);
      arr.push(value.C_RT_ANT);
      arr.push(value.C_LT_ANT);
      arr.push(value.D_RT_POST);
      arr.push(value.D_LT_POST);
      arr.push('MTA');
      arr.push(value.CHIPS);
      arr.push('');
      arr.push(value.B_RT_Cingulate);
      arr.push(value.B_LT_Cingulate);
      arr.push(value.C_RT_POST);
      arr.push(value.C_LT_POST);
      arr.push('');
      arr.push(value.MTA);
      arr.push(value.hisnum + '/MRI/' + value.id);
      return arr;
  }

}
