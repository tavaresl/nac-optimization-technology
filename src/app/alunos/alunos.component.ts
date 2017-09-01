import { Component, OnInit } from '@angular/core';

interface Aluno {
  avatar: string;
  nome: string;
}

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  private alunos: Aluno[] = [
    { avatar: 'assets/images/aluno01.jpg', nome: 'José' },
    { avatar: 'assets/images/aluno02.jpg', nome: 'Monica' },
    { avatar: 'assets/images/aluno03.jpg', nome: 'Daniel' },
    { avatar: 'assets/images/aluno04.jpg', nome: 'Hugo' },
    { avatar: 'assets/images/aluno05.jpg', nome: 'Matheus' },
    { avatar: 'assets/images/aluno06.jpg', nome: 'Mary' },
    { avatar: 'assets/images/aluno07.jpg', nome: 'Joice' },
    { avatar: 'assets/images/aluno08.jpg', nome: 'Renê' },
    { avatar: 'assets/images/aluno09.jpg', nome: 'Lucas' },
    { avatar: 'assets/images/aluno10.jpg', nome: 'Alex' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
