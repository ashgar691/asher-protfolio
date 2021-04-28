import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy } from "@angular/router";
import { ListProjectsComponent } from './list-projects/list-projects.component';

const routes: Routes = [
  { path: "", component: ListProjectsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyProjectsRoutingModule { }
