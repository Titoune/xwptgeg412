import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {UserListPage} from "../pages/user-list/user-list";
import {ChatPage} from '../pages/chat/chat';
import {DiscussionPage} from '../pages/discussion/discussion';
import {DiscussionListPage} from '../pages/discussion-list/discussion-list';
import {DiscussionCreatePage} from '../pages/discussion-create/discussion-create';
import {EventListPage} from '../pages/event-list/event-list';
import {PollListPage} from '../pages/poll-list/poll-list';
import {ProfilePage} from "../pages/profile/profile";
import {UserProfilePage} from "../pages/user-profile/user-profile";
import {EventCreatePage} from '../pages/event-create/event-create';
import {PollCreatePage} from '../pages/poll-create/poll-create';

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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
    UserListPage,
    ChatPage,
    DiscussionPage,
    DiscussionListPage,
    EventListPage,
    PollListPage,
    ProfilePage,
    UserProfilePage,
    DiscussionCreatePage,
    EventCreatePage,
    PollCreatePage
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
    DiscussionPage,
    DiscussionListPage,
    EventListPage,
    PollListPage,
    ProfilePage,
    UserProfilePage,
    DiscussionCreatePage,
    EventCreatePage,
    PollCreatePage
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
    Auth
  ]
})
export class AppModule {
}
