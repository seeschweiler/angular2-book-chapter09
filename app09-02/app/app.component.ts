import {Component} from 'angular2/core';
import {BookmarkService} from './bookmark.service';
import {Bookmark} from './bookmark';

@Component({
   selector: 'my-app',
   template: `
   <h3>My Bookmarks:</h3>
   <ul>
     <li *ngFor="#bookmark of bookmarks">
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
   styles: ['.error {color:red;}'],
   providers: [BookmarkService]
})
export class AppComponent {
  bookmarks: Bookmark[];
  errorMessage: string;

  constructor(private _bookmarkService: BookmarkService){
  }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this._bookmarkService.getBookmarks()
                          .then(
                            bookmarks => this.bookmarks = bookmarks,
                            error => this.errorMessage = <any> error
                          );
  }

  addBookmark(title: string, url: string) {
    if (!title || !url) {return;}
    this._bookmarkService.addBookmark(title, url)
                          .then(
                            bookmark => this.bookmarks.push(bookmark),
                            error => this.errorMessage = <any>error); 
  }
}
