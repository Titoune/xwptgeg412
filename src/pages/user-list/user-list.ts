import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users";
import {Auth} from "../../app/auth";
import {UserProfilePage} from "../user-profile/user-profile";

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  public items: any = [];
  public users: any = [];
  public isLoaded: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth, private usersProvider: UsersProvider) {
    this.getUsers();

  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

  getUsers() {
    this.usersProvider.getUsers().subscribe(data => {
        this.items = data.users;
        this.users = data.users;
        this.isLoaded = true;
      },
      error => {
      });
  }


  search(ev: any) {
    let val: string = ev.target.value;
    console.log(val);
    //exit if val is empty
    if (val === undefined) {
      this.users = this.items;
      return;
    }
    else if (val.trim() == '' || val.trim().length < 2) {
      this.users = this.items;
      return;
    }

    if (val && val.trim() != '') {
      this.users = this.items.filter((item) => {
        return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      })
    }
  }

  goToUserProfilePage(id) {
    this.navCtrl.push(UserProfilePage, {
      id: id
    });

  }

}
