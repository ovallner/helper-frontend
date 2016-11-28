import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { AppComponent }   from './app.component';
import { AccountCreateComponent }   from './create-an-account/create-an-account.component';
import { AccountLoginComponent } from './login/login.component';
//import { DashboardCounselorComponent } from './dashboard-counselor/dashboard-counselor';
//import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient';
import { UserService } from './user.service';
import { AccountsService } from './accounts.service';
import { ChatLanding } from './chat/chat-landing.component';
//import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    RouterModule.forRoot([
  		{ path: '', component: AccountLoginComponent },
      { path: 'register', component: AccountCreateComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'chatrooms', component: ChatLanding},
      //{ path: 'home', component: HomeComponent}
    ])
  ],
  declarations: [
  	AppComponent,
  	AccountLoginComponent,
    AccountCreateComponent,
    ChatLanding,
    ChatComponent,
    //HomeComponent
    //DashboardCounselorComponent,
    //DashboardPatientComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ UserService,  AccountsService]
})

export class AppModule { }
