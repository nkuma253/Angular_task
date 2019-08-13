import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app.routing-module';
 import {NgxPaginationModule} from 'ngx-pagination';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  
   
    
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,NgxPaginationModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
