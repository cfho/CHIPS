import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public readers;
  constructor(
    private afService: FirebaseService
  ){}
 
  ngOnInit(): void {
    this.afService.getInterpreter()
    .subscribe(value => {
      this.afService.readers = Object.values(value).toString();
      console.log(this.afService.readers);
    })
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/