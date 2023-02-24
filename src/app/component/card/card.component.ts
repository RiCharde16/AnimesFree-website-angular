import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  Icon:string = "assets/Arquivos/CheckCircle.svg"

  @Input()
  mensage:string = "Usuario Cadastrado Bem Vindo"

  constructor() { }

  ngOnInit(): void {
  }

}
