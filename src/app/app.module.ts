import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { NavagationComponent } from './components/navagation/navagation.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes:Routes = [
  {path:"" , component:UsersComponent},
  {path:"profile", component:ProfileComponent},
  {path:"todos", component:TodosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UsersComponent,
    NavagationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
