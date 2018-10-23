import { NgModule } from '@angular/core';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxNavbarModule,
  IgxTabsModule,
  IgxCardModule,
  IgxGridModule,
} from 'igniteui-angular';

@NgModule({
  imports: [
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxTabsModule,
    IgxCardModule,
    IgxGridModule.forRoot(),
  ],
  exports: [
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxTabsModule,
    IgxCardModule,
    IgxGridModule,
  ],
})
export class IgniteModule {}
