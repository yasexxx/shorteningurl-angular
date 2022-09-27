import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, delay, map, mergeMap, of, switchMap, throwError, withLatestFrom } from "rxjs";
import { LinkService } from "../services/link.service";
import { setAPIStatus } from "../shared/store/app.action";
import { Appstate } from "../shared/store/appState";
import { createLinkAPISuccess, invokeCreateLinkAPI, invokeLinkAPI, linkFetchAPIError, linkFetchAPISuccess } from "./link.action";
import { selectLink } from "./link.selector";


@Injectable()
export class LinkEffect {

  initialStatus = { apiStatus: {apiResponseMessage: '', apiStatus: ''}};
  constructor(
    private action$: Actions,
    private linkService: LinkService,
    private appStore: Store<Appstate>
  ){}

  loadLink$ = createEffect( () =>
    this.action$.pipe(
      ofType(invokeLinkAPI),
      switchMap( (action) => {
        this.appStore.dispatch(
          setAPIStatus( this.initialStatus )
        );
        return this.linkService.getLink(action.code)
          .pipe( map( res => {
            console.log(res);

            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success'}
              })
            );
            return linkFetchAPISuccess({ responseLink: res});
          }),
          delay(2500)
          )
      })
    ));



    createLink$ = createEffect( () =>
      this.action$.pipe(
        ofType(invokeCreateLinkAPI),
        switchMap( (action) => {
          this.appStore.dispatch(
            setAPIStatus( this.initialStatus)
          );
          return this.linkService.createLink(action.data).pipe(
            map( res => {
              this.appStore.dispatch(
                setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: 'success'}})
              );
              return createLinkAPISuccess({ newLink: res })
            }),
          )
        })
      ))


}
