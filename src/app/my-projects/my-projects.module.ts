import { NgModule } from '@angular/core';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { MyProjectsRoutingModule } from './my-projects-routing.module';




@NgModule({
  declarations: [
    ListProjectsComponent
  ],
  imports: [
    MyProjectsRoutingModule
  ]
})
export class MyProjectsModule { }
