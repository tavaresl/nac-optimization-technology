import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { GridCellComponent } from './grid-cell/grid-cell.component';
import { CoverComponent } from './cover/cover.component';
import { FooterComponent } from './footer/footer.component';

import { HttpModule }   from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    GridRowComponent,
    GridCellComponent,
    CoverComponent,
    FooterComponent,
    HomeComponent,
    AlunosComponent,
    DisciplinasComponent,
    ContatosComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
