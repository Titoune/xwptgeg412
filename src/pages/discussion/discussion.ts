import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Auth} from "../../app/auth";

/**
 * Generated class for the DiscussionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {
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
