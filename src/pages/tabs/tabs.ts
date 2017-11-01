import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {UserListPage} from "../user-list/user-list";
import {ChatPage} from '../chat/chat';
import {DiscussionsPage} from '../discussions/discussions';
import {EventsPage} from '../events/events';
import {PollsPage} from '../polls/polls';
import {ProfilePage} from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UserListPage;
  tab3Root = EventsPage;
  tab4Root = ChatPage;
  tab5Root = DiscussionsPage;
  tab6Root = PollsPage;
  tab7Root = ProfilePage;




  constructor() {

  }
}
