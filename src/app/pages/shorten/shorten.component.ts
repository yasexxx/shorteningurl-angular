import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLink, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { resetLinkData } from 'src/app/store/link.action';
import { selectLink } from 'src/app/store/link.selector';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent implements OnInit, OnDestroy {


  faLink = faLink;
  faSparkles = faWandMagicSparkles;
  shortUrl = '';
  longUrl = '';
  copyText = 'Copy';
  data: any;
  subscription1!: Subscription;

  constructor(private store: Store,
              private router: Router) { }

  link$ = this.store.pipe(select(selectLink));

  ngOnInit(): any {
    this.subscription1 = this.link$.subscribe({
      next: (link) => {
          this.data= link.data;
          if (!this.data) return this.router.navigateByUrl('');

          this.shortUrl = this.data.shortUrl;
          return this.longUrl = this.data.longUrl;
      },
    })
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.goHome();
  }

  copy () {
    this.copyText = 'Copied!';
  }

  goHome () {
    this.store.dispatch(
      resetLinkData({reset: true})
    );
  }

}
