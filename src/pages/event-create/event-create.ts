import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Auth} from "../../app/auth";
import {EventsProvider} from "../../providers/events";
import {Validators, FormBuilder} from "@angular/forms";
/**
 * Generated class for the EventCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {

  private isLoading: boolean = false;
  private isLoadingError: boolean = false;
  public event: any = {};
  public event_form;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth:Auth,
              private eventsProvider: EventsProvider,
              public loadingCtrl: LoadingController,
              private formBuilder: FormBuilder) {

    this.event_form = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30)])],
      start: ['', Validators.compose([Validators.required])],
      end: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      street_number: ['', Validators.compose([Validators.required])],
      route: ['', Validators.compose([Validators.required])],
      postal_code: ['', Validators.compose([Validators.required])],
      locality: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      country_short: [''],
      lat: [''],
      lng: [''],
    });
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }


  submit() {
    if (this.event_form.valid) {

      let loading = this.loadingCtrl.create({content: 'Enregistrement...'});
      loading.present();

      this.eventsProvider.sendEvent(this.event_form.value)
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
