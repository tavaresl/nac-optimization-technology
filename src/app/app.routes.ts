import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'disciplinas', component: DisciplinasComponent }
];
