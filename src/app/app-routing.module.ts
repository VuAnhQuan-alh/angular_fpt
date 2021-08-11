import { HomeComponent } from './home/home.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prod', component: ProdListComponent },
  { path: 'prod/:id/edit', component: ProdEditComponent },
  { path: 'create', component: ProdAddComponent },
  { path: 'prod/detail/:id', component: ProdDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
