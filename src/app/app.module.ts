import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ChipDiscountComponent } from './components/chip-discount/chip-discount.component';
import { ChipTextComponent } from './components/chip-text/chip-text.component';


@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    ChipDiscountComponent,
    ChipTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
