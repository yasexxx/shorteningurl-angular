import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenRoutingModule } from './shorten-routing.module';
import { ShortenComponent } from './shorten.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShareButtonsModule  } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    ShortenComponent
  ],
  imports: [
    CommonModule,
    ShortenRoutingModule,
    SharedModule,
    ShareButtonsModule,
    ShareIconsModule,
    ClipboardModule
  ],
  exports: []
})
export class ShortenModule { }
