import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search/ui/search-page/search-page.component';
import { UploadPageComponent } from './upload/ui/upload-page/upload-page.component';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { HomePageComponent } from './home/ui/home-page/home-page.component';
import { ProfilePageComponent } from './profile/ui/profile-page/profile-page.component';
import { NotfoundPageComponent } from './shared/ui/notfound-page/notfound-page.component';
import { InboxPageComponent } from './inbox/ui/inbox-page/inbox-page.component';
import { LoginPageComponent } from './auth/ui/login-page/login-page.component';
import { RegisterPageComponent } from './auth/ui/register-page/register-page.component';
import { DesktopPageComponent } from './shared/ui/desktop-page/desktop-page.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'desktop', component: DesktopPageComponent },
  {
    path: 'dash',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'inbox', component: InboxPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '404', component: NotfoundPageComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
