import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Auth} from "./auth";
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if (this.auth.getAuthUser() && this.nav.getActive() && this.nav.getActive().name == 'LoginPage') {
        this.nav.setRoot(TabsPage);
      }

      if (!this.auth.getAuthUser()) {
        this.nav.setRoot(LoginPage);
      }
    });
  }
}
