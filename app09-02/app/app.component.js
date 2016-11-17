"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bookmark_service_1 = require('./bookmark.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppComponent = (function () {
    function AppComponent(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getBookmarks();
    };
    AppComponent.prototype.getBookmarks = function () {
        var _this = this;
        this.bookmarkService.getBookmarks()
            .subscribe(function (bookmarks) { return _this.bookmarks = bookmarks; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.addBookmark = function (title, url) {
        var _this = this;
        if (!title || !url) {
            return;
        }
        console.log("addBookmark in AppComponent");
        console.log("title: " + title);
        console.log("url: " + url);
        this.bookmarkService.addBookmark(title, url)
            .subscribe(function (bookmark) { return _this.bookmarks.push(bookmark); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n   <h3>My Bookmarks:</h3>\n   <ul>\n     <li *ngFor=\"let bookmark of bookmarks\">\n       <strong>{{ bookmark.title }}</strong> - (<a href=\"{{bookmark.url}}\">{{bookmark.url}}</a>)\n     </li>\n   </ul>\n\n   <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n       <h3 class=\"panel-title\">New Bookmark:</h3>\n     </div>\n     <div class=\"panel-body\">\n       <div class=\"form-inline\">\n         <div class=\"form-group\">\n           <label for=\"newBookmarkTitleInput\">Title</label>\n           <input id=\"newBookmarkTitleInput\" class=\"form-control\" #newBookmarkTitle />\n         </div>\n         <div class=\"form-group\">\n           <label for=\"newBookmarkUrlInput\">URL</label>\n           <input id=\"newBookmarkUrlInput\" class=\"form-control\" #newBookmarkUrl />\n         </div>\n         <button class=\"btn btn-default\" (click)=\"addBookmark(newBookmarkTitle.value, newBookmarkUrl.value); newBookmarkTitle.value=''; newBookmarkUrl.value=''\">Add Bookmark</button>\n       </div>\n       <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n     </div>\n\n   </div>\n   ",
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map