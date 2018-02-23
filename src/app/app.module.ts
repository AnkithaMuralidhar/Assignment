import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { SidebarComponent } from './component/landing/branches/sidebar/sidebar.component';
import { CommitListComponent } from './component/landing/branches/commit-list/commit-list.component';
import { LandingService } from './component/landing/landing.service';
import { NavbarComponent } from './component/landing/general/navbar/navbar.component';
import { MyProfileComponent } from './component/landing/profile/my-profile/my-profile.component';
import { SideBarItemComponent } from './component/landing/branches/sidebar/side-bar-item/side-bar-item.component';
import { CommitItemComponent } from './component/landing/branches/commit-list/commit-item/commit-item.component';
import { BranchesComponent } from './component/landing/branches/branches.component';
import { ProfileComponent } from './component/landing/profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home/profile', pathMatch: 'full' },
  {
    path: 'home', component: LandingComponent,
    children: [
      {
        path: '', redirectTo: 'profile', pathMatch: 'full'
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'branches', component: BranchesComponent
      },
      {
        path: '*', redirectTo: '/profile', pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    CommitListComponent,
    NavbarComponent,
    MyProfileComponent,
    SideBarItemComponent,
    CommitItemComponent,
    BranchesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

