import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  constructor(public navCtrl: NavController) {

  }

}
