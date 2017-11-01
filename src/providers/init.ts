import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';

import {ToastController} from "ionic-angular";
import {GLOBAL} from '../app/global'

/*
  Generated class for the InitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InitProvider {

  constructor(public http: Http, private toastCtrl: ToastController) {

  }

  private DEFAULT_JSON_ERRORS = {
    "status": "error",
    "data": {
      "flash": null,
      "data": []
    }
  }

  public buildRequestOptions() {
    let headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});

    let jwt = localStorage.getItem('jwt');
    if (jwt) {
      headers.append('Authorization', jwt);
    }
    return new RequestOptions({headers: headers});
  }

  public handleResponse(data) {
    let response;
    try {
      response = data.json();
    } catch (e) {
      return null;
    }

    this.toastCtrl.create({
      message: response.result.flash,
      duration: 3000,
      position: 'bottom',
      cssClass: 'toast-success'
    }).present();

    if (response.result.jwt) {
      localStorage.setItem('jwt', response.result.jwt);
    }
    return (response.result && response.result.data ? response.result.data : null);

  }

  public handleError(data) {

    let response;
    try {
      response = data.json();
    } catch (e) {
      return null;
    }

    if (response instanceof ProgressEvent) {
      response = this.DEFAULT_JSON_ERRORS;
    }

    if (response.result.flash === null) {
      response.flash = GLOBAL.defaultFlashErrors[data.status];
    }

    this.toastCtrl.create({
      message: response.result.flash,
      duration: 3000,
      position: 'bottom',
      cssClass: 'toast-error'
    }).present();

    return Observable.throw(response);
  }

}
