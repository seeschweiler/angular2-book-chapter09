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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var BookmarkService = (function () {
    function BookmarkService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.bookmarksUrl = 'http://localhost:8080/api/bookmarks';
    }
    BookmarkService.prototype.getBookmarks = function () {
        return this.http.get(this.bookmarksUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookmarkService.prototype.addBookmark = function (title, url) {
        var body = JSON.stringify({ "title": title, "url": url });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: this.headers });
        return this.http.post(this.bookmarksUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookmarkService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BookmarkService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookmarkService);
    return BookmarkService;
}());
exports.BookmarkService = BookmarkService;
//# sourceMappingURL=bookmark.service.js.map