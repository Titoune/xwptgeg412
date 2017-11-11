import {Injectable} from '@angular/core';
import {InitProvider} from "./init";
import {GLOBAL} from '../app/global'
import {Observable} from "rxjs/Observable";


/*
  Generated class for the ChatMessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatMessagesProvider extends InitProvider {


  getChatMessages() {
    return this.http.get(GLOBAL.apiUrl + `chat-messages/get-chat-messages/`, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }


  sendChatMessage(content) {

    return this.http.post(GLOBAL.apiUrl + `chat-messages/send-chat-message`, JSON.stringify({
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
