import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentMrgComponent } from './components/student-mrg/student-mrg.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from './ShareService';
import { DeviceMrgComponent } from './components/device-mrg/device-mrg.component';
import { BorrowMrgComponent } from './components/borrow-mrg/borrow-mrg.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentMrgComponent,
    AddStudentComponent,
    EditStudentComponent,
    DeviceMrgComponent,
    BorrowMrgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ShareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
