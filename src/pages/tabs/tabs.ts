import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {UserListPage} from "../user-list/user-list";
import {ChatPage} from '../chat/chat';
import {DiscussionListPage} from '../discussion-list/discussion-list';
import {EventListPage} from '../event-list/event-list';
import {PollListPage} from '../poll-list/poll-list';
import {ProfilePage} from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UserListPage;
  tab3Root = EventListPage;
  tab4Root = ChatPage;
  tab5Root = DiscussionListPage;
  tab6Root = PollListPage;
  tab7Root = ProfilePage;




  constructor() {

  }
}
