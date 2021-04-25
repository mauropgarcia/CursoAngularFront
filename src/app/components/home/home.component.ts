import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  listaProdutos: any[]=[
    {nome:'Curso de Excel Básico', preco:35.36, validade:'2021-08-09',id:1,foto:'assets/img/excel.fw.png', promocao:true},
    {nome:'Curso de Ionic', preco:75.96, validade:'2021-09-09',id:2, promocao:true,foto:'assets/img/ionic.fw.png'},
    {nome:'Curso de Ionic Avançado', preco:1075.96, validade:'2022-09-09',id:3,foto:'assets/img/cps.png'},
    {nome:'Curso de Delphi 7', preco:35.36, validade:'2021-08-09',id:1,foto:'assets/img/delphi.fw.png'},
    {nome:'Curso de Visual Basic', preco:75.96, validade:'2021-09-09',id:2, promocao:true,foto:'assets/img/vb.fw.png'},
    {nome:'Curso de VS Code', preco:1075.96, validade:'2022-09-09',id:3,foto:'assets/img/vs.fw.png'}
  ]

  NomeProduto: string = 'Curso de Angular';
  Anuncio: string = `O ${this.NomeProduto} está em promoção!`;
  IdProduto: number = 123;
  PrecoProduto: number = 2.59;
  Promocao: boolean = true;
  Foto:string='assets/img/cps.png';
  DataValidade='2021-12-31';
  constructor() {
    ////variáveis string concatenadas
    this.Anuncio = 'O ' + this.NomeProduto + ' está em promoção!';
    console.log('Nome do Produto:',this.NomeProduto);
    console.log('Anúncio: ', this.Anuncio);
    console.log('Preço do produto: ',this.PrecoProduto);
    console.log('ID do produto: ',this.IdProduto);
    console.log('Ativo: ', this.Promocao);
    //escopo das variaveis dentro do codigo
    // var Variavel1;
    // let Variavel2;
    // const Variavel3=1;
  }
  ngOnInit(): void {

  }

}
