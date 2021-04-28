import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutModule } from './about/about.module';

const routes: Routes = [
  {
    path: "about",
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: "projects",
    loadChildren: () => import('./my-projects/my-projects.module').then(m => m.MyProjectsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
