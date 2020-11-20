import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HireServicesComponent } from './hire-services/hire-services.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';

const routes: Routes = [

  {path:'projects',component:ProjectsComponent},
  {path:'hire-services',component:HireServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:HeaderComponent},
  {path:'**',component:RecentProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
