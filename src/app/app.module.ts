import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { SidebarComponent } from './component/landing/sidebar/sidebar.component';
import { CommitListComponent } from './component/landing/commit-list/commit-list.component';
import { LandingService } from './component/landing/landing.service'


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    CommitListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
