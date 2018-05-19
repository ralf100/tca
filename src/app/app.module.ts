import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AviationComponent } from './aviation/aviation.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aviation', component: AviationComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'contact', component: ContactComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AviationComponent,
    EnterpriseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
