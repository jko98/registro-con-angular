import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteRegistroComponent } from './componente-registro/componente-registro.component';
import { ComponenteTablaComponent } from './componente-tabla/componente-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteRegistroComponent,
    ComponenteTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
