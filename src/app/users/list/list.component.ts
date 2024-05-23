import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  usersSubs: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.usersSubs = this.userService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }

  ngOnDestroy(): void {
    this.usersSubs.unsubscribe();
  }
}
