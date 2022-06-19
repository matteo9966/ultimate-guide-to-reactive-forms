import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { AddressComponent } from "./customer/address/address.component";
import { OrderComponent } from "./customer/order/order.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule],
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    OrderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
