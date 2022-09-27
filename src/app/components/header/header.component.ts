import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetLinkData } from '../../store/link.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Shortening URL';

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(
      resetLinkData({reset: true})
    );
  }

}
