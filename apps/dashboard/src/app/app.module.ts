import { UiLibModule } from '@mdv-twenty-six/ui-lib';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { DrinksDetailsComponent } from './drinks/drinks-details/drinks-details.component';
import { DrinksListComponent } from './drinks/drinks-list/drinks-list.component';
import { DrinksItemComponent } from './drinks/drinks-item/drinks-item.component';
import { DrinksComponent } from './drinks/drinks.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty-six/core-data';
import { MaterialModule } from '@mdv-twenty-six/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DrinksComponent, DrinksItemComponent, DrinksListComponent, DrinksDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
