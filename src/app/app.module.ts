import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ChipsComponent, ChipsDialog } from './chips/chips.component';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, MatNativeDateModule,} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FirebaseService } from './firebase.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { StudyDetailComponent } from './study-detail/study-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { StudyEditComponent } from './study-edit/study-edit.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentExampleDialog } from './dialog/dialog.component';



@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatPaginatorModule,
    
    RouterModule.forRoot([
      { path: '', component: ChipsComponent },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'study-detail/:Id', component: StudyDetailComponent },
      { path: 'study-edit/:Id', component: ChipsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ChipsComponent,
    PatientDetailComponent,
    StudyDetailComponent,
    PatientListComponent,
    StudyEditComponent,
    DialogComponent,
    DialogContentExampleDialog,
    ChipsDialog
  ],
  entryComponents: [ DialogComponent, DialogContentExampleDialog, ChipsDialog ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/