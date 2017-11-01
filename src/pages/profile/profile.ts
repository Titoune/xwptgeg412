import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Auth} from "../../app/auth";
import {UsersProvider} from "../../providers/users";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {Validators, FormBuilder} from "@angular/forms";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: object = {};
  public picture: any;
  public profileForm;
  private isLoaded: boolean = false;

  public options: CameraOptions = {
    quality: 90,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: Auth,
              private usersProvider: UsersProvider,
              public loadingCtrl: LoadingController,
              private camera: Camera,
              private formBuilder:FormBuilder) {
    this.getMe();
    this.profileForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email:['', Validators.compose([Validators.required])],
      sex:['', Validators.compose([Validators.required])],
      street_number:['', Validators.compose([Validators.required])],
      route:['', Validators.compose([Validators.required])],
      postal_code:['', Validators.compose([Validators.required])],
      locality:['', Validators.compose([Validators.required])],
      country:['', Validators.compose([Validators.required])],
      country_short:['', Validators.compose([Validators.required])],
      lat:['', Validators.compose([Validators.required])],
      lng:['', Validators.compose([Validators.required])],
      cellphone_code:['', Validators.compose([Validators.required])],
      cellphone:['', Validators.compose([Validators.required])],
      phone:['', Validators.compose([Validators.required])],
      birth:['', Validators.compose([Validators.required])],
      presentation:['', Validators.compose([Validators.required])],
      profession:['', Validators.compose([Validators.required])],
      notification_anniversary:['', Validators.compose([Validators.required])],
      notification_event:['', Validators.compose([Validators.required])],
      notification_poll:['', Validators.compose([Validators.required])],
      branch:['', Validators.compose([Validators.required])],
      password1:['', Validators.compose([Validators.required])],
      password2:['', Validators.compose([Validators.required])]

    });
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }

  getMe() {
    this.usersProvider.getMe().subscribe(data => {
        this.user = data.user;
        this.isLoaded = true;
      },
      error => {
      });
  }


  submit() {
    if (this.profileForm.valid) {

      let loading = this.loadingCtrl.create({content: 'Enregistrement...'});
      loading.present();

      this.usersProvider.setProfileForm(this.profileForm.value)
        .subscribe(result => {
            loading.dismiss();
          },
          error => {
            loading.dismiss();
          }
        )
    }
  }


  takePhoto() {
    this.camera.getPicture(this.options).then((imageData) => {

      this.usersProvider.setProfilePictureForm(imageData)
        .subscribe(result => {
            this.picture = 'data:image/jpeg;base64,' + imageData;

            console.log(result);
            //loading.dismiss();
          },
          error => {
            console.log(error);

            //loading.dismiss();
          }
        )


    }, (err) => {
      // Handle error
    });
  }

}
