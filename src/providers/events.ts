import {Injectable} from '@angular/core';
import {InitProvider} from "./init";
import {GLOBAL} from '../app/global'
import {Observable} from "rxjs/Observable";

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider  extends InitProvider {
  getEvents() {
    return this.http.get(GLOBAL.apiUrl + `events/get-events/`, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }

  getEvent(id) {
    return this.http.get(GLOBAL.apiUrl + `events/get-event/` + id, this.buildRequestOptions())
      .map(res => {
        return this.handleResponse(res);
      })
      .retryWhen((errors) => {
        return errors.mergeMap((error) => (error.status != 0) ? Observable.throw(error) : Observable.of(error)).delay(1000).take(15);
      }).catch((err: Response) => {
        return this.handleError(err);
      });
  }

  sendEvent(event) {

    return this.http.post(GLOBAL.apiUrl + `events/send-event`, JSON.stringify(event), this.buildRequestOptions())
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
