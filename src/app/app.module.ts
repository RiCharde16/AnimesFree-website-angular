import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Declarações
import { AppComponent } from './app.component';
import { CadastroComponent } from './Pages/Cadastro/cadastro.component';
import { HomeComponent } from './Pages/home/home.component';

// Inportações
import { AppRoutingModule } from "./app-routing.module"
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from './component/card/card.component';
import { LoginComponent } from './Pages/login/login.component'
import { MatIconModule } from '@angular/material/icon';
import { CardAnimeComponent } from './component/card-anime/card-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    CardComponent,
    LoginComponent,
    CardAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
