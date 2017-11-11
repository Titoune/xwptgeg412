import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users";
import {DiscussionPage} from '../discussion/discussion';
import {Auth} from "../../app/auth";
/**
 * Generated class for the DiscussionCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-discussion-create',
  templateUrl: 'discussion-create.html',
})
export class DiscussionCreatePage {
  public users : any = [];
  public items: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public usersProvider: UsersProvider,
              private auth: Auth) {

  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

  search(ev: any) {
    let val: string = ev.target.value;
    if (val === undefined) {
      this.users = [];
      return;
    }
    else if (val.trim() == '' || val.trim().length < 2) {
      this.users = [];
      return;
    }

    if (val && val.trim() != '') {
      this.usersProvider.getUsersByFullname(val).subscribe(data => {
          this.users = data.users;
        },
        error => {
        });
    }
  }

  goToDiscussionPage(user_id) {
    this.navCtrl.setRoot(DiscussionPage, {
      user_id: user_id
    });

  }

}
