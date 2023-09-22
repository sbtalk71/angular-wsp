import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionStatus,RedirectRequest } from '@azure/msal-browser'
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isUserLoggedIn: boolean = false;
  private readonly _destroy=new Subject<void>();

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private msalBroadCastService: MsalBroadcastService, private authService: MsalService) {

  }
  ngOnInit(): void {
    this.msalBroadCastService.inProgress$.pipe(filter((interactionStatus: InteractionStatus) => interactionStatus == InteractionStatus.None),takeUntil(this._destroy))
      .subscribe(x => (this.isUserLoggedIn = this.authService.instance.getAllAccounts().length > 0));
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  login() {
    if(this.msalGuardConfig.authRequest){
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest as RedirectRequest
      })
    }else{
      this.authService.loginRedirect();
    }

  }

  logout() {
    this.authService.logoutRedirect({postLogoutRedirectUri:'http://localhost:4200/'});
  }
}
