import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child.routing';

import { FatherTwo } from '../father.component';
import { ChildrenComponent, ChildrenOne } from './children.component';

@NgModule({
    imports: [
        CommonModule,
        ChildRoutingModule
    ],
    declarations: [
        FatherTwo,
        ChildrenComponent,
        ChildrenOne
    ]
})
export class ChildModule { }
