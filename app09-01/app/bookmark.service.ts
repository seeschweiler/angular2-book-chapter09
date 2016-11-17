import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bookmark }       from './bookmark';

@Injectable()
export class BookmarkService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private bookmarksUrl = 'http://localhost:8080/api/bookmarks';

  constructor(private http: Http) { }

  getBookmarks(): Promise<Bookmark[]> {
    return this.http.get(this.bookmarksUrl)
               .toPromise()
               .then(response => response.json() as Bookmark[])
               .catch(this.handleError);
  }

  addBookmark(title: string, url: string) : Promise<Bookmark> {
    return this.http
      .post(this.bookmarksUrl, JSON.stringify({ "title": title, "url": url }), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
