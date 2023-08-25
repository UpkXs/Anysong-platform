import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ButtonComponent } from './widgets/button/button.component';
import { PlaygroundComponent } from './playground/playground.component';
import { CircleButtonWithNumericComponent } from './widgets/circle-button-with-numeric/circle-button-with-numeric.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonComponent,
    PlaygroundComponent,
    CircleButtonWithNumericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
