import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActorComponent } from './components/actor/actor.component';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { InvalidComponent } from './components/invalid/invalid.component';

import { ListactorsComponent } from './components/listactors/listactors.component';
import { AddactorComponent } from './components/addactor/addactor.component';
import { UpdateactorComponent } from './components/updateactor/updateactor.component';
import { DeleteactorComponent } from './components/deleteactor/deleteactor.component';

import { ListmoviesComponent } from './components/listmovies/listmovies.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { DeletemovieComponent } from './components/deletemovie/deletemovie.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';

import { ActorBirthYearAgePipe } from './pipes/actor-birth-year-age.pipe';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const routingTable: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "updatemovie", component: UpdatemovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "**", component: InvalidComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    ListmoviesComponent,
    AddmovieComponent,
    UpdatemovieComponent,
    DeletemovieComponent,
    ActorBirthYearAgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routingTable, 
      {useHash: true}
      ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
