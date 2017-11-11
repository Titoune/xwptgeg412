import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Auth} from "../../app/auth";
import {DiscussionsProvider} from "../../providers/discussions";
import {Validators, FormBuilder} from "@angular/forms";
import {DiscussionMessagesProvider} from "../../providers/discussion-messages";

/**
 * Generated class for the DiscussionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  private discussion: any;
  private discussion_message_form;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: Auth,
              private formBuilder: FormBuilder,
              private discussionsProvider: DiscussionsProvider,
              private discussionMessagesProvider: DiscussionMessagesProvider) {
    this.getDiscussion();
    this.discussion_message_form = formBuilder.group({
      content: ['', Validators.compose([Validators.required])]
    });
  }


  getDiscussion() {
    this.discussionsProvider.getDiscussion(this.navParams.get('user_id')).subscribe(data => {
        this.discussion = data.discussion;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.isLoadingError = true;

      });
  }

  ionViewCanEnter() {
    return this.auth.isAuthorized();
  }


  submit() {
    if (this.discussion_message_form.valid) {

      this.discussionMessagesProvider.sendDiscussionMessage(this.discussion.id, this.discussion_message_form.value.content)
        .subscribe(data => {
          this.discussion_message_form.reset();

        }, error => {

        })
    }
  }

}
