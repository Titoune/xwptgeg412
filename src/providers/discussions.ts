import {Injectable} from '@angular/core';
import {InitProvider} from "./init";
import {GLOBAL} from '../app/global'
import {Observable} from "rxjs/Observable";


/*
  Generated class for the DiscussionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiscussionsProvider extends InitProvider {

  getDiscussionMessages() {
    return this.http.get(GLOBAL.apiUrl + `discussions/get-discussion-messages/`, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }

  getDiscussion(user_id) {
    return this.http.get(GLOBAL.apiUrl + `discussions/get-discussion/` + user_id, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }
}
