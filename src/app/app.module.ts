import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { TugasComponent } from './tugas/tugas.component';
import { ServersComponent } from './servers/servers.component';
import { Tugas3Component } from './tugas3/tugas3.component';
import { Week5Component } from './week5/week5.component';
import { HeaderComponent } from './header/header.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TugasComponent,
    ServersComponent,
    Tugas3Component,
    Week5Component,
    HeaderComponent,
    MahasiswaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
