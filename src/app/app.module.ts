import { SpinnerOverlayService } from './shared/services/spinner-overlay.service';
import { DemoModule } from './demo/demo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { ValidationModule } from './shared/validation-summary/validation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot(),
    LayoutModule,
    DemoModule,
    AuthModule
  ],
  providers: [
    SpinnerOverlayService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
