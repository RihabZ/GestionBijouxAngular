import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AddAccessoireComponent } from './add-accessoire/add-accessoire.component';
import { FormsModule } from '@angular/forms';
import { UpdateAccessoireComponent } from './update-accessoire/update-accessoire.component';
import { SearchAccessoireComponent } from './search-accessoire/search-accessoire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { MenuComponent } from './menu/menu.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component'; 
@NgModule({
  declarations: [
    AppComponent,
   AccessoiresComponent,
  AddAccessoireComponent,
  UpdateAccessoireComponent,
  SearchAccessoireComponent,
  DashboardComponent,
  ConnectComponent,
  MenuComponent,
  ForbiddenComponent,
  ConnectHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
