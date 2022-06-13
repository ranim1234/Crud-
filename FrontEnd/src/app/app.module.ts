import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTING } from './app-routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { FiltreComponent } from './filtre/filtre.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    FiltreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    ROUTING , 
    HttpClientModule  , 
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
