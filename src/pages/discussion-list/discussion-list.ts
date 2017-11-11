import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DiscussionsProvider} from "../../providers/discussions";
import {DiscussionPage} from '../discussion/discussion';
import {Auth} from "../../app/auth";
import {DiscussionCreatePage} from "../discussion-create/discussion-create";

/**
 * Generated class for the DiscussionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-discussion-list',
  templateUrl: 'discussion-list.html',
})
export class DiscussionListPage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  private discussion_messages: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public discussionsProvider: DiscussionsProvider,
              private auth: Auth) {
    this.getDiscussions();
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

  getDiscussions() {
    this.discussionsProvider.getDiscussionMessages().subscribe(data => {
        this.discussion_messages = data.discussion_messages;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.isLoadingError = true;

      });
  }

  goToDiscussion(user_id) {
    this.navCtrl.push(DiscussionPage, {
      'user_id': user_id
    });
  }

  goToDiscussionCreatePage() {
    this.navCtrl.push(DiscussionCreatePage);
  }

}
