import { IOStatsComponent } from './components/iostats/iostats.component';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SessieComponent } from './components/sessie/sessie.component';
import { TijdComponent } from './components/tijd/tijd.component';
import { SlotComponent } from './components/slot/slot.component';
import { LaserComponent } from './components/laser/laser.component';
import { BerichtComponent } from './components/bericht/bericht.component';
import { LogsComponent } from './components/logs/logs.component';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {RxStompConfig} from './config/RxStompConfig';
import { DrukknopComponent } from './components/drukknop/drukknop.component';
import {FormsModule} from '@angular/forms';
import { LichtComponent } from './components/licht/licht.component';
import { RookComponent } from './components/rook/rook.component';

registerLocaleData(localeNl, 'nl');

@NgModule({
  declarations: [
    AppComponent,
    SessieComponent,
    TijdComponent,
    SlotComponent,
    LaserComponent,
    BerichtComponent,
    LogsComponent,
    DrukknopComponent,
    IOStatsComponent,
    LichtComponent,
    RookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl-NL'
    },
    {
      provide: InjectableRxStompConfig,
      useValue: RxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
