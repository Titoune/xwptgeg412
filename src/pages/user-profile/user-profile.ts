import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users";
import {Auth} from "../../app/auth";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  public user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth, private usersProvider: UsersProvider) {
    this.getUser(navParams.get('id'));

  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

  getUser(id) {
    this.usersProvider.getUser(id).subscribe(data => {
      this.isLoading = false;
        this.user = data.user;
      },
      error => {
        this.isLoading = false;
        this.isLoadingError = true;

      });
  }

}
