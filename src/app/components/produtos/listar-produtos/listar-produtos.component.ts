import { IProduto } from './../../../model/IProduto.model';
import { CardProdutoComponent } from './../../../shared/components/card-produto/card-produto.component';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos:IProduto[]=[];
  constructor(private ProdutosService:ProdutosService) {
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos():void{
    this.ProdutosService.buscarTodos().subscribe(retorno=>{
       this.listaProdutos=retorno;
    }
    );
  }

  deletar(produto:IProduto):void{
      this.ProdutosService.excluir(produto.id).subscribe(()=>{
         this.ProdutosService.exibirMensagem(
           'Sistema',
           `${produto.nome} foi excluído com sucesso!`,
           'toast-success'
         );
         this.carregarProdutos();
      })
  }
}
