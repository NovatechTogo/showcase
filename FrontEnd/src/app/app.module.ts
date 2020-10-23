import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule, MatIconModule } from '@angular/material/';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RightMenuService } from './services/rightMenu/right-menu.service';
import { OverViewComponent } from './components/over-view/over-view.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurServicesTopComponent } from './components/our-services-top/our-services-top.component';
import { OurServicesCardsComponent } from './components/our-services-cards/our-services-cards.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactTopComponent } from './components/contact-top/contact-top.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RightBarComponent,
    CarouselComponent,
    OverViewComponent,
    WhyChooseUsComponent,
    OurServicesComponent,
    OurServicesTopComponent,
    OurServicesCardsComponent,
    ContactComponent,
    ContactTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    RightMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
