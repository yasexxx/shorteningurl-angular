import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LinkService } from '../services/link.service';

@Injectable({
  providedIn: 'root'
})
export class LinkResolver implements Resolve<boolean> {

  constructor(private linkService:LinkService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.linkService.shortenData$;
  }

}
