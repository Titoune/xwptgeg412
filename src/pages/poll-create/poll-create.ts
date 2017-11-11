import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Auth} from "../../app/auth";
import {PollsProvider} from "../../providers/polls";
import {Validators, FormBuilder} from "@angular/forms";

/**
 * Generated class for the PollCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-poll-create',
  templateUrl: 'poll-create.html',
})
export class PollCreatePage {
  private isLoading: boolean = false;
  private isLoadingError: boolean = false;
  public poll: any = {};
  public poll_form;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: Auth,
              private pollsProvider: PollsProvider,
              public loadingCtrl: LoadingController,
              private formBuilder: FormBuilder) {
    this.poll_form = formBuilder.group({
      question: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }


  submit() {
    if (this.poll_form.valid) {

      let loading = this.loadingCtrl.create({content: 'Enregistrement...'});
      loading.present();

      this.pollsProvider.sendPoll(this.poll_form.value)
        .subscribe(result => {
            loading.dismiss();
          },
          error => {
            loading.dismiss();
          }
        )
    }
  }

}
