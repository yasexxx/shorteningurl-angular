import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    FontAwesomeModule,
    FormsModule,
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: 'BASE_URL', useFactory: () => environment.baseUrl, },
        { provide: 'API_URL', useFactory: () => environment.apiUrl, },
      ]
    }
  }
 }
