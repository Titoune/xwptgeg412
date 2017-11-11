import {Injectable} from '@angular/core';
import {InitProvider} from "./init";
import {GLOBAL} from '../app/global'
import {Observable} from "rxjs/Observable";


/*
  Generated class for the PollsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PollsProvider  extends InitProvider{

  getPolls() {
    return this.http.get(GLOBAL.apiUrl + `polls/get-polls/`, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }

  getPoll(id) {
    return this.http.get(GLOBAL.apiUrl + `polls/get-poll/` + id, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }

  sendPoll(poll) {

    return this.http.post(GLOBAL.apiUrl + `polls/send-poll`, JSON.stringify(poll), this.buildRequestOptions())
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
