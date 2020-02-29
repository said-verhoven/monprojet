import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ArticleComponent } from './article/article.component';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';

const appRoutes: Routes = [
  { path : 'Utilisateur', component: UtilisateurComponent  },
  { path : 'Article', component: ArticleComponent  },
  { path : 'Photos', component: PhotosComponent  },

  { path : '',
  redirectTo: '/utilisateur',
  pathMatch: 'full'
 },
]

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ArticleComponent,
    PhotosComponent,
    Compo1Component,
    Compo2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
