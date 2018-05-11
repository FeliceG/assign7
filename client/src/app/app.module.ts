import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ResearcherService } from './researcher.service';

import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { ResearcherdetailComponent } from './researcherdetail/researcherdetail.component';
import { NewresearcherComponent } from './newresearcher/newresearcher.component';

const routes: Routes = [
   { path: '', redirectTo: '/researcher', pathMatch: 'full'},
   { path: 'researcher', component: RosterComponent },
   { path: 'researcher/:id', component: ResearcherdetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    ResearcherComponent,
    ResearcherdetailComponent,
    NewresearcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [ResearcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
