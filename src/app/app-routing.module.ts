import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component'; 

const routes: Routes = [
  { path:'', redirectTo:"/employees", pathMatch:"full"},
  { path:"employees", component: EmployeeFormComponent},
  { path:"posts", component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
