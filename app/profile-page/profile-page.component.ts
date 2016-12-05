import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'profile-page',
    templateUrl: './app/profile-page/profile-page.html',
    styleUrls: [ './app/profile-page/profile-page.html' ],
    providers: [ AccountsService ]
})

export class ProfilePageComponent { }