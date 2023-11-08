import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ProvmovementComponent } from './provmovement/provmovement.component';
import { ProvmovementService } from './provmovement/provmovement.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {path: '', redirectTo: '/movimientos', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'movimientos', component: ProvmovementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ProvmovementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProvmovementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
