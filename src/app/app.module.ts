import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
 
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      space: -10,
      outerStrokeWidth: 10,
      outerStrokeColor: "#4882c2",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 10,
      title: "Completion Date: 4/19/2018",
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }