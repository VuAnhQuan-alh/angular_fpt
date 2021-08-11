import { CategoriesService } from './categories.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    NotFoundComponent,
    ProdEditComponent,
    ProdDetailComponent,
    ProdAddComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
