import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLink, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
// import { circle } from '@fortawesome/free-regular-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  faLink = faLink;
  faCircle = faCircleExclamation;

  longUrl = '';
  errorTextMessage = '';
  validationClass = {};
  invalidUrl = false;

  subscription1!: Subscription;
  timeOut1!: any;
  timeOut2!: any;

  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              private linkService: LinkService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
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

    return this.subscription1 = this.linkService.createLink(sendRequestData)
      .subscribe({
      next: async ({data, error}) => {
        console.log({data, error});

        if (error){
          const errorMessage = error.error;
          if (errorMessage) this.errorTextMessage = errorMessage;
          else this.errorTextMessage = 'Invalid URL.'
          this.runError();
          return await this.spinner.hide();
        };

        this.linkService.changeShortenData(data);
        await this.spinner.hide();
        await this.router.navigateByUrl('/app/shorten');
      },
      error: (errors) => {
        this.runError();
        this.spinner.hide();
        this.errorTextMessage = 'Something went wrong.';
        console.log(errors);

      }
    });
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
