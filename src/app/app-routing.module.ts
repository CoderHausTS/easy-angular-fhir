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
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
