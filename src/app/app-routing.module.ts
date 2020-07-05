import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConformanceComponent } from './conformance/conformance.component';

const routes: Routes = [
  {
    path: 'conformance',
    component: ConformanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
