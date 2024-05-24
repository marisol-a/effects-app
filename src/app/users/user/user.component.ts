import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { loadUser } from '../../store/actions';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy {
  routerSubs: Subscription;
  userSubs: Subscription;
  user: User;
  error: any;
  loading: boolean = false;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.routerSubs = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id: parseInt(id) }));
    });
    this.userSubs = this.store
      .select('user')
      .subscribe(({ user, loading, error }) => {
        this.user = user;
        this.loading = loading;
        this.error = error;
      });
  }

  ngOnDestroy(): void {
    this.routerSubs.unsubscribe();
    this.userSubs.unsubscribe();
  }
}
