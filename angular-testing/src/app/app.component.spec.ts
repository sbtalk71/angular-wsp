import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

xdescribe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
  });

  it("isUserLoggedIn should return false",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app=fixture.componentInstance;
    expect(app.isUserLoggedIN).toBe(false);

  });

  it("login() should return true",()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app=fixture.componentInstance;
    expect(app.login()).toBe(true);

  });
});
