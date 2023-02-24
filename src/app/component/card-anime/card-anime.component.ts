import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css']
})
export class CardAnimeComponent implements OnInit {


  @Input()
  imageAnime:string = ''

  @Input()
  tituloAnime:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
