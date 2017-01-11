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


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
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
      }
    ])
  ],
  providers: [ApartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
