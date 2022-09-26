import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, delay, Observable, of } from 'rxjs';
import { Link } from '../interfaces/link';
import { ResponseLink } from '../interfaces/response-link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  API_ENDPOINT = '';

  private _shortenData$ = new BehaviorSubject<any>(null);

  shortenData$ =  this._shortenData$.asObservable();

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(@Inject('API_URL') private API_URL:string,
              private http: HttpClient,
  ) {
    this.API_ENDPOINT = this.API_URL + '/api/version1';
   }

  getLink(code: string | null): Observable<ResponseLink> {
    const apiEndpoint = this.API_ENDPOINT + `/shorten?code=${code}`;
    return this.http.get<ResponseLink>(apiEndpoint, {headers: this.headers});
  }

  createLink(data: {url: string}): Observable<ResponseLink> {
    const apiEndpoint = this.API_ENDPOINT + '/shorten';
    return this.http.post<ResponseLink>(apiEndpoint, data, {headers: this.headers})
      .pipe( catchError( error => of(error)),
        debounceTime(300), delay(1000));
  }

  changeShortenData(data: any){
    this._shortenData$.next(data);
  }
}
