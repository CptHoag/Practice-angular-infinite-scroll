import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
