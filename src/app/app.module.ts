import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';;
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/posts/post.component';
import { HomeComponent } from './components/home/home.component';
import { DettagliPostComponent } from './components/dettagli-post/dettagli-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Route[] = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "addPost",
                component: AddPostComponent
            }
        ]
    },
    {
        path: "post",
        component: PostComponent
    },
    {
        path: "dettagli/:id",
        component: DettagliPostComponent
    },
    {
        path: "edit/:id",
        component: EditPostComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    HomeComponent,
    DettagliPostComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
