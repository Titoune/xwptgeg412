import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Auth} from "../../app/auth";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: Auth) {
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

}
