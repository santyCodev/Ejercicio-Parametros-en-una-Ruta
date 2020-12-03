import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaNumComponent } from './components/tabla-num/tabla-num.component';
import { TablaNumTermComponent } from './components/tabla-num-term/tabla-num-term.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaNumComponent,
    TablaNumTermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
