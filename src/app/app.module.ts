import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/layouts/blank-layout/blank-layout.component';
import { NavigationComponent } from './shared/layouts/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
