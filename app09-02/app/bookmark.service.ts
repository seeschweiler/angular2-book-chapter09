import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Bookmark}       from './bookmark';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BookmarkService {
  constructor(private http:Http) {

  }

  private _bookmarksUrl = 'http://localhost:8080/api/bookmarks';

  getBookmarks() {
    return this.http.get(this._bookmarksUrl)
                    .toPromise()
                    .then(res => <Bookmark[]> res.json(), this.handleError);
  }

  addBookmark(title: string, url: string) : Promise<Bookmark> {
    let body = JSON.stringify({ "title": title, "url": url });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._bookmarksUrl, body, options)
      .toPromise()
      .then(res => <Bookmark> res.json())
      .catch(this.handleError)
  }

  private handleError (error: Response) {
    console.error(error);
    return Promise.reject(error.json().error || 'Server error');
  }
}
