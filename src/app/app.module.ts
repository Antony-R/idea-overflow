import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { IdeaService } from './services/idea.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddIdeaComponent } from './components/add-idea/add-idea.component';
import { FormsModule } from '@angular/forms';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    NavbarComponent,
    AddIdeaComponent,
    DeleteRequestComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'idea-overflow'),
    AngularFirestoreModule
  ],
  providers: [IdeaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
