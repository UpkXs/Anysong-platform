import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ButtonComponent } from './widgets/button/button.component';
import { PlaygroundComponent } from './playground/playground.component';
import { OctothorpeWithNumericComponent } from './widgets/octothorpe-with-numeric/octothorpe-with-numeric.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonComponent,
    PlaygroundComponent,
    OctothorpeWithNumericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
