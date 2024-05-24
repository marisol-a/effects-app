import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/actions';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit, OnDestroy {
  usersSubs: Subscription;
  users: User[];
  loading: boolean = false;
  error = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.usersSubs = this.store
      .select('users')
      .subscribe(({ users, loading, error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(loadUsers());
  }

  ngOnDestroy(): void {
    this.usersSubs.unsubscribe();
  }
}
