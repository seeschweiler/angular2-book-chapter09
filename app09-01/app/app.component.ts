import { Component, OnInit }  from '@angular/core';
import { Bookmark }           from './bookmark';
import { BookmarkService }    from './bookmark.service';

@Component({
   selector: 'my-app',
   template: `
   <h3>My Bookmarks:</h3>
   <ul>
     <li *ngFor="let bookmark of bookmarks">
       <strong>{{ bookmark.title }}</strong> - (<a href="{{bookmark.url}}">{{bookmark.url}}</a>)
     </li>
   </ul>

   <div class="panel panel-default">
     <div class="panel-heading">
       <h3 class="panel-title">New Bookmark:</h3>
     </div>
     <div class="panel-body">
       <div class="form-inline">
         <div class="form-group">
           <label for="newBookmarkTitleInput">Title</label>
           <input id="newBookmarkTitleInput" class="form-control" #newBookmarkTitle />
         </div>
         <div class="form-group">
           <label for="newBookmarkUrlInput">URL</label>
           <input id="newBookmarkUrlInput" class="form-control" #newBookmarkUrl />
         </div>
         <button class="btn btn-default" (click)="addBookmark(newBookmarkTitle.value, newBookmarkUrl.value); newBookmarkTitle.value=''; newBookmarkUrl.value=''">Add Bookmark</button>
       </div>
       <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
     </div>

   </div>
   `,
   styles: ['.error {color:red;}']
})
export class AppComponent {
  bookmarks: Bookmark[];

  constructor(private bookmarkService: BookmarkService){}

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this.bookmarkService
        .getBookmarks()
        .then(bookmarks => this.bookmarks = bookmarks);
  }

  addBookmark(title: string, url: string) {
    if (!title || !url) {return;}
    this.bookmarkService.addBookmark(title, url)
                        .then(bookmark => this.bookmarks.push(bookmark))
  }
}
