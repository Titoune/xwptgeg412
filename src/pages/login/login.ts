import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UsersProvider} from "../../providers/users";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private loadingCtrl: LoadingController,
              private usersProvider: UsersProvider) {
    this.loginForm = this.formBuilder.group({
      cellphone_code: ['+33', Validators.required],
      cellphone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loading = this.loadingCtrl.create({content: 'Connexion...'});
      loading.present();
      this.usersProvider.setLoginForm(this.loginForm.value)
        .subscribe(data => {
            loading.dismiss();
            this.navCtrl.setRoot('UserListPage');

          },
          error => {
            loading.dismiss();
          }
        )
    }
  }
}
