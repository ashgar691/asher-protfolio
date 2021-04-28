import { NgModule } from '@angular/core';
import { AboutRoutingModule } from "./about-routing.module";
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  imports: [
    AboutRoutingModule
  ],
  declarations: [
    ProfileComponent
  ],
})
export class AboutModule { }
