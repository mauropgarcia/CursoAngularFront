import { UsuariosService } from './../../../services/usuarios.service';
import { IUsuario } from './../../../model/IUsuarios.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  listaUsuarios:IUsuario[]=[];
  constructor(private UsuariosService:UsuariosService) {

  }
  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios():void{
    this.UsuariosService.buscarTodos().subscribe(retorno=>{
       this.listaUsuarios=retorno;
    });
  }

  deletar(usuario:IUsuario):void{
    this.UsuariosService.excluir(usuario.id).subscribe(()=>{
       this.UsuariosService.exibirMensagem(
         'Sistema',
         `${usuario.nome} foi excluído com sucesso!`,
         'toast-success'
       );
       this.carregarUsuarios();
    })
}

}
