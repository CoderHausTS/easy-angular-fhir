import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConformanceComponent } from './conformance/conformance.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'conformance',
    component: ConformanceComponent,
  },
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
