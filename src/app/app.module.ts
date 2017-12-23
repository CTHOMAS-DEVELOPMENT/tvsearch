import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { TvDataAccessService } from './shared/tv-data-access.service';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"welcome", component:WelcomeComponent},
      {path:"episodes", component:EpisodesComponent},
      {path:"", redirectTo:"welcome",pathMatch: "full"},
      {path:"**", redirectTo:"welcome",pathMatch: "full"}
    ])
  ],
  providers: [TvDataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
