import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {UserListPage} from "../pages/user-list/user-list";
import {ChatPage} from '../pages/chat/chat';
import {DiscussionsPage} from '../pages/discussions/discussions';
import {EventsPage} from '../pages/events/events';
import {PollsPage} from '../pages/polls/polls';
import {ProfilePage} from "../pages/profile/profile";
import {UserProfilePage} from "../pages/user-profile/user-profile";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UsersProvider} from '../providers/users';
import {PollsProvider} from '../providers/polls';
import {PollAnswersProvider} from '../providers/poll-answers';
import {PollProposalsProvider} from '../providers/poll-proposals';
import {EventsProvider} from '../providers/events';
import {EventCommentsProvider} from '../providers/event-comments';
import {EventParticipationsProvider} from '../providers/event-participations';
import {ChatMessagesProvider} from '../providers/chat-messages';
import {DiscussionsProvider} from '../providers/discussions';
import {DiscussionMessagesProvider} from '../providers/discussion-messages';
import {InitProvider} from '../providers/init';
import {HttpModule} from '@angular/http';
import {Auth} from "./auth";
import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
    UserListPage,
    ChatPage,
    DiscussionsPage,
    EventsPage,
    PollsPage,
    ProfilePage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
    UserListPage,
    ChatPage,
    DiscussionsPage,
    EventsPage,
    PollsPage,
    ProfilePage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    PollsProvider,
    PollAnswersProvider,
    PollProposalsProvider,
    EventsProvider,
    EventCommentsProvider,
    EventParticipationsProvider,
    ChatMessagesProvider,
    DiscussionsProvider,
    DiscussionMessagesProvider,
    InitProvider,
    Auth,
    Camera

  ]
})
export class AppModule {
}
