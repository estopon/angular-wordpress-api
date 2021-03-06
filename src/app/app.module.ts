import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PostCardsComponent } from './components/post-cards/post-cards.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PostsCategoryComponent } from './components/posts-category/posts-category.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router/router.config';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { NgwWowModule } from 'ngx-wow';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CookieLawModule } from 'angular2-cookie-law';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    AboutComponent,
    PostCardsComponent,
    SideMenuComponent,
    PostsCategoryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexModule,
    HttpClientModule,
    FormsModule,
    NgwWowModule,
    AngularFontAwesomeModule,
    CookieLawModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
