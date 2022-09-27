import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLink, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
// import { circle } from '@fortawesome/free-regular-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LinkService } from 'src/app/services/link.service';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppstate } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { invokeCreateLinkAPI } from 'src/app/store/link.action';
import { selectLink } from 'src/app/store/link.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private spinner: NgxSpinnerService,
    private router: Router,
    private store: Store,
    private appStore: Store<Appstate>,
    private linkService: LinkService) { }

  faLink = faLink;
  faCircle = faCircleExclamation;

  longUrl = '';
  errorTextMessage = '';
  validationClass = {};
  invalidUrl = false;

  subscription1!: Subscription;
  subscription2!: Subscription;
  timeOut1!: any;
  timeOut2!: any;

  link$ = this.store.pipe(select(selectLink));

  ngOnInit(): void {
    this.subscription2 = this.link$.subscribe({
      next: async ({data, error}) => {
        console.log({data, error});

        if (error){
          const errorMessage = error.error;
          if (errorMessage) this.errorTextMessage = errorMessage;
          else this.errorTextMessage = 'Invalid URL.'
          this.runError();
          return await this.spinner.hide();
        };

        if (data){
          this.linkService.changeShortenData(data);
          await this.spinner.hide();
          await this.router.navigateByUrl('/app/shorten');
        }
      },
      error: (errors) => {
        this.runError();
        this.spinner.hide();
        this.errorTextMessage = 'Something went wrong.';
        console.log(errors);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    clearTimeout(this.timeOut1);
  }


  submitUrl() {
    if (this.longUrl === '') {
      this.spinner.show();
      return this.timeOut1 = setTimeout( async () => {
        this.runError();
        await this.spinner.hide();
        this.errorTextMessage = 'The URL field is required.';
      }, 1800);
    }
    const sendRequestData = {url: this.longUrl}
    this.spinner.show();

    this.store.dispatch(
      invokeCreateLinkAPI({data: sendRequestData})
    );

    const apiStatus$ = this.appStore.pipe(select(selectAppstate));
    return this.subscription1 = apiStatus$.subscribe( {
      next: (appstate) => {
        if(appstate.apiStatus === 'success') {
          this.appStore.dispatch(
            setAPIStatus({apiStatus: { apiResponseMessage: '', apiStatus: ''}})
          )
        }
      }
    })
  }

  runError() {
    this.invalidUrl = true;
        this.validationClass = {
          'border-[#e23d3d]' : true
        }
  }

  focus() {
    this.validationClass = {
      'border-[#e23d3d]' : false,
    }
  }

  focusOut() {
    this.validationClass = {
      'border-[#e23d3d]' : true,
    }
  }

}
