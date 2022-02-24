import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, filter, shareReplay } from 'rxjs/operators';
// import { of, Observable, Subject } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase-admin';
// import * as serviceAccount from '../serviceAccountKey.json';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  readers;

  constructor(
    private router: Router,
    public db: AngularFirestore,
    public dbr: AngularFireDatabase,
    // public afAuth: AngularFireAuth,
  ) { }

  add(data) {
    const addTime = Date.now(); //
    // data.updateTime = addTime;
    this.dbr.object('studies/' + data.hisnum + '/MRI/' + data.accessnum + '_' + data.reader)
      .set(data)
      .then(() => console.log("Add new record OK"))
      .catch(err => console.log(err));

    this.dbr.object('studies/' + data.hisnum + '/updateTime')
    .set(addTime)
    .then(() => console.log("Add new record OK"))
      .catch(err => console.log(err));

  }

  deleteByReader(reader){
    return this.dbr.object('studies/' + reader)
      .remove()
      .then(() => console.log("delete OK"))
      .catch(err => console.log(err));
  }

  update(id, data) {
    return this.dbr.object('studies/' + id)
      .update(data)
      .then(() => console.log("update OK"))
      .catch(err => console.log(err));
  }

  getInterpreter() {
    return this.dbr.object('interpreter')
      .valueChanges();
  }

  getAll() {
    return this.dbr.list('studies')
    .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.key,
            ...doc.payload.val()
          };
        });
      }),
      shareReplay());
  }

  getStudyByReader(reader) {
    return this.dbr.object('studies/' + reader)
    .valueChanges();
  }

  getMRIbyHx(HxNum) {
    return this.dbr.list('studies/' + HxNum + '/MRI')
    .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.key,
            ...doc.payload.val()
          };
        });
      }));
  }

  

}