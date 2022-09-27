import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { invokeLinkAPI } from 'src/app/store/link.action';
import { selectLink } from 'src/app/store/link.selector';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router,
              private store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): any {
    this.store.dispatch(invokeLinkAPI({code: this.route.snapshot.paramMap.get('id')}));
    this.store.pipe(select(selectLink)).subscribe({
      next: (redirectData) => {
        const error = redirectData?.error;
        const data = redirectData?.data;

        if (error) return this.router.navigateByUrl('error/404', { skipLocationChange: true});

        if (data) return location.href = data.longUrl;
        return
      },
      error: (err) => {
        console.log(err);
      }
    });



  }

}
