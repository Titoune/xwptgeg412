import {Injectable} from '@angular/core';
import {InitProvider} from "./init";
import {GLOBAL} from '../app/global'
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DiscussionMessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiscussionMessagesProvider  extends InitProvider {

  sendDiscussionMessage(discussion_id, content)
  {
    return this.http.post(GLOBAL.apiUrl + `discussion-messages/send-discussion-message`, JSON.stringify({
      'discussion_id': discussion_id,
      'content': content
    }), this.buildRequestOptions())
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
