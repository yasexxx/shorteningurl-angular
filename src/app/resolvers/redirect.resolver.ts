import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of} from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { ResponseLink } from '../interfaces/response-link';
import { LinkService } from '../services/link.service';
import { invokeLinkAPI } from '../store/link.action';
import { selectLink } from '../store/link.selector';


@Injectable({
  providedIn: 'root'
})
export class RedirectResolver implements Resolve<any> {

  constructor(private store: Store) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(select(selectLink));
  }
}
