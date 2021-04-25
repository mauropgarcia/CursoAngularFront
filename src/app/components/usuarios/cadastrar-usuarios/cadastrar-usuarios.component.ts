import { UsuariosService } from './../../../services/usuarios.service';
import { IUsuario } from './../../../model/IUsuarios.models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {
  usuario:IUsuario={
    nome:null,
    nascimento:null,
    idade:null,
    senha:null
  };
    constructor(private UsuariosService:UsuariosService, private router:Router) { }

    ngOnInit(): void {
    }
    salvarUsuario():void{
       this.UsuariosService.cadastrar(this.usuario).subscribe(retorno=>{
           this.usuario=retorno;
           this.UsuariosService.exibirMensagem(
             'SISTEMA',
             `${this.usuario.nome} foi cadastrado com sucesso. ID: ${this.usuario.id}`,
             'toast-success'
           )
       });
       this.router.navigate(['/usuarios']);
    }
  }
