import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of} from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { LinkService } from '../services/link.service';


@Injectable({
  providedIn: 'root'
})
export class RedirectResolver implements Resolve<any> {

  constructor(private linkService: LinkService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.linkService.getLink(route.paramMap.get('id'))
        .pipe( catchError( () => { return of({error: 'Not found'})}),
        delay(2500));
  }
}
