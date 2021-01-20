import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatherComponent, FatherOne, FatherThree } from './father/father.component';

const routes: Routes = [
  { path: '', redirectTo: '/father', pathMatch: 'full' },
  { path: 'father', component: FatherComponent },
  { path: 'one', component: FatherOne },
  { path: 'two', loadChildren: 'app/father/children/child.module#ChildModule' },
  { path: 'three', component: FatherThree },
  { path: '**', redirectTo: '/father', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
