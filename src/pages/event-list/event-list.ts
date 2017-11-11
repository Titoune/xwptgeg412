import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Auth} from "../../app/auth";
import {EventCreatePage} from '../../pages/event-create/event-create';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: Auth) {
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

  goToEventCreatePage() {
    this.navCtrl.push(EventCreatePage);
  }

}
