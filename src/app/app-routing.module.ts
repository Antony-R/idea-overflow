import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { AddIdeaComponent } from './components/add-idea/add-idea.component';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';
import { IdeasComponent } from './components/ideas/ideas.component';

const routes: Routes = [
  {path: 'add-idea', component: AddIdeaComponent},
  {path: '', component: IdeasComponent},
  {path: 'delete-request', component: DeleteRequestComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
