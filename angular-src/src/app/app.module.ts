import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ListService } from 'src/app/services/list.service';

@NgModule({
  declarations: [AppComponent, AddListComponent, ViewListComponent],
  // Modules go here
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  // All the services go here
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
