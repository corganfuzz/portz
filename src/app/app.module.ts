import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { IgniteModule } from './ignite/ignite.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { GraphcardsComponent } from './graphcards/graphcards.component';
import { OperationaltableComponent } from './operationaltable/operationaltable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RemotetableComponent } from './remotetable/remotetable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    GraphcardsComponent,
    OperationaltableComponent,
    RemotetableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgniteModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
