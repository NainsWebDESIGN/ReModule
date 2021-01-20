import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatherTwo } from '../father.component';
import { ChildrenComponent, ChildrenOne } from './children.component';

const routes: Routes = [
  {
    path: '', component: FatherTwo,
    children: [
      { path: '', redirectTo: '/child', pathMatch: 'full' },
      { path: 'child', component: ChildrenComponent },
      { path: 'childone', component: ChildrenOne },
      { path: '**', redirectTo: '/child', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
