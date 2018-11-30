import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HarryComponent } from './harry/harry.component';
import { RonComponent } from './ron/ron.component';
import { HermioneComponent } from './hermione/hermione.component';


const routes: Routes = [
  {path: "", redirectTo: "harry" , pathMatch: "full"},
  {path: "harry", component: HarryComponent},
  {path: "ron", component: RonComponent},
  {path: "hermione", component: HermioneComponent},

  



];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule { }
