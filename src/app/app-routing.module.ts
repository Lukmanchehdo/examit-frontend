import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowMrgComponent } from './components/borrow-mrg/borrow-mrg.component';
import { DeviceMrgComponent } from './components/device-mrg/device-mrg.component';
import { StudentMrgComponent } from './components/student-mrg/student-mrg.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentMrgComponent },
  { path: 'device', component: DeviceMrgComponent },
  { path: 'borrow', component: BorrowMrgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
