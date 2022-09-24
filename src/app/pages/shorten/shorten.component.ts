import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { faLink, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent implements OnInit {


  faLink = faLink;
  faSparkles = faWandMagicSparkles;
  shortUrl = '';
  longUrl = '';
  copyText = 'Copy';
  data: any;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): any {
    this.data = this.route.snapshot.data['link'];

    if (!this.data) return this.router.navigateByUrl('');

    this.shortUrl = this.data.shortUrl;
    this.longUrl = this.data.longUrl;
  }

  copy () {
    this.copyText = 'Copied!';
  }

}
