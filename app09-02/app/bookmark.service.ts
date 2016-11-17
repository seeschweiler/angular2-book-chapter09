import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import { Bookmark }                 from './bookmark';

@Injectable()
export class BookmarkService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private bookmarksUrl = 'http://localhost:8080/api/bookmarks';

  constructor(private http: Http) { }

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get(this.bookmarksUrl)
                    .map(res => <Bookmark []>res.json())
                    .catch(this.handleError);
  }

  addBookmark(title: string, url: string) : Observable<Bookmark> {
    let body = JSON.stringify({ "title": title, "url": url });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.bookmarksUrl, body, options)
                    .map(res => <Bookmark> res.json())
                    .catch(this.handleError)
  }

  private handleError (error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
