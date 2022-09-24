import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = 'Shortening URL';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
