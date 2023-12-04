import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search/ui/search-page/search-page.component';
import { HomePageComponent } from './home/ui/home-page/home-page.component';
import { UploadPageComponent } from './upload/ui/upload-page/upload-page.component';
import { ProfilePageComponent } from './profile/ui/profile-page/profile-page.component';
import { TabsComponent } from './shared/ui/tabs/tabs.component';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { NotfoundPageComponent } from './shared/ui/notfound-page/notfound-page.component';
import { DesktopPageComponent } from './shared/ui/desktop-page/desktop-page.component';
import { InboxPageComponent } from './inbox/ui/inbox-page/inbox-page.component';
import { LoginPageComponent } from './auth/ui/login-page/login-page.component';
import { RegisterPageComponent } from './auth/ui/register-page/register-page.component';
import { ActionbarComponent } from './home/ui/actionbar/actionbar.component';
import { VideoComponent } from './home/ui/video/video.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchPageComponent,
    HomePageComponent,
    UploadPageComponent,
    ProfilePageComponent,
    TabsComponent,
    LayoutComponent,
    NotfoundPageComponent,
    DesktopPageComponent,
    InboxPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ActionbarComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
