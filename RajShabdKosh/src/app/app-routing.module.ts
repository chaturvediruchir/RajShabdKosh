import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadScanComponent } from './upload-scan/upload-scan.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'upolad', component:UploadScanComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
