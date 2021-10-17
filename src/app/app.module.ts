import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { FiltersComponent } from './components/shopping-card/filters/filters.component';
import { ProductListComponent } from './components/shopping-card/product-list/product-list.component';

import { CardItemComponent } from './components/shopping-card/card/card-item/card-item.component';
import {CardComponent} from './components/shopping-card/card/card.component';
import { ProductItemComponent } from './components/shopping-card/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from './app-routing-module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent,
        ShoppingCardComponent,
        FiltersComponent,
        ProductListComponent,
        CardItemComponent,
        CardComponent,
        ProductItemComponent,
        LoginComponent,
        RegisterComponent,
        PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
