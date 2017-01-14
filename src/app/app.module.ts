import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ApartmentsService } from './shared/apartments.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { BudjetzComponent } from './budjetz/budjetz.component';
import { CrowdControlComponent } from './crowd-control/crowd-control.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    PortfolioComponent,
    SkillsComponent,
    BudjetzComponent,
    CrowdControlComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: HeaderComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
    ])
  ],
  providers: [ApartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
