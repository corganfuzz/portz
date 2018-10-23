import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { IgniteModule } from './ignite/ignite.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { GraphcardsComponent } from './graphcards/graphcards.component';
import { OperationaltableComponent } from './operationaltable/operationaltable.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DrawerComponent, GraphcardsComponent, OperationaltableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IgniteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
