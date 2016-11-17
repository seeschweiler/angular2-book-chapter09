import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';
import { BookmarkService }  from './bookmark.service';
import { Bookmark }         from './bookmark';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  providers:    [ BookmarkService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
