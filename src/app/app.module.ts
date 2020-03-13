import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StickerComponent } from './sticker/sticker.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeArComponent } from './home-ar/home-ar.component';
import { CityEnComponent } from './city-en/city-en.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { OrderDoneComponent } from './order-done/order-done.component';
import { OrderErrorComponent } from './order-error/order-error.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StickerComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    InvoiceComponent,
    HomeArComponent,
    CityEnComponent,
    WrongRouteComponent,
    CustomValidationComponent,
    OrderDoneComponent,
    OrderErrorComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
