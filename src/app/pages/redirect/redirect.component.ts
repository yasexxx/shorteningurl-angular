import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): any {
    const redirectData = this.route.snapshot.data['redirect'];
    const error = redirectData?.error;
    const data = redirectData?.data;


    if (error) return this.router.navigateByUrl('error/404', { skipLocationChange: true});

    // console.log(redirectData);

    if (data) return location.href = data.longUrl;

  }

}
