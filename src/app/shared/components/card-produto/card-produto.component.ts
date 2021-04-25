import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto:string;
  @Input() nome:string;
  @Input() promocao:boolean;
  @Input() id:number;
  @Input() validade:string;
  @Input() preco:number;

  constructor() { }

  ngOnInit(): void {
  }

}
