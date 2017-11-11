import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Auth} from "../../app/auth";

/**
 * Generated class for the PollsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html',
})
export class PollsPage {
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
