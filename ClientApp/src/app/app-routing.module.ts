import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateOTPComponent } from './generate-otp/generate-otp.component';
import { ValidateOTPComponent } from './validate-otp/validate-otp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'generate',
    pathMatch: 'full'
  },
  {
    path: 'generate',
    component: GenerateOTPComponent
  },
  {
    path: 'validate',
    component: ValidateOTPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
