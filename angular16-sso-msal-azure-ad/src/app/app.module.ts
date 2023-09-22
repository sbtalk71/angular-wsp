import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalModule,MsalInterceptor,MsalRedirectComponent,MsalGuard } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(new PublicClientApplication(
      {
        auth: {
          clientId: '312683c3-39ee-4939-bdf9-3ce0c1ead4d9',
          authority: 'https://login.microsoftonline.com/d2163bca-0615-4c03-918d-91f2e25a45a0',
          redirectUri: 'http://localhost:4200',
          postLogoutRedirectUri: 'http://localhost:4200',
          navigateToLoginRequestUrl: true
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: false
        }
      }
    ), //end of ClientApplication Object
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read']
        }
      },

      {
        interactionType:InteractionType.Redirect,
        protectedResourceMap:new Map([
          ['http://graph.microsoft.com/v1.0/me',['user.read']]
        ])
      })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:MsalInterceptor,
    multi:true

  },MsalGuard],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
