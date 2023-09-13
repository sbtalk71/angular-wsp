import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ContentComponent } from './content/content.component';
import { HighlighterDirective } from './highlighter.directive';
import { Highlighter2Directive } from './highlighter2.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DemoPipePipe } from './demo-pipe.pipe';
import { PowerPipe } from './power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ContentComponent,
    HighlighterDirective,
    Highlighter2Directive,
    PipesComponent,
    DemoPipePipe,
    PowerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
