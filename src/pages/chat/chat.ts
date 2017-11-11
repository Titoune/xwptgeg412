import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ChatMessagesProvider} from "../../providers/chat-messages";
import {Validators, FormBuilder} from "@angular/forms";
import {Auth} from '../../app/auth';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private isLoading: boolean = true;
  private isLoadingError: boolean = false;
  private chat_messages: any = [];
  private chat_message_form;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public auth:Auth,
              public chatMessagesProvider: ChatMessagesProvider) {
    this.getChatMessages();

    this.chat_message_form = formBuilder.group({
      content: ['', Validators.compose([Validators.required])]
    });
  }

  getChatMessages() {
    this.chatMessagesProvider.getChatMessages().subscribe(data => {
        this.chat_messages = data.chat_messages;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.isLoadingError = true;

      });
  }


  submit() {
    if (this.chat_message_form.valid) {

      this.chatMessagesProvider.sendChatMessage(this.chat_message_form.value.content)
        .subscribe(data => {
            this.chat_message_form.reset();

          }, error => {

        })
    }
  }


}
