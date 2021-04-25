import { UsuariosService } from './../../../services/usuarios.service';
import { IUsuario } from './../../../model/IUsuarios.models';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-usuarios',
  templateUrl: './atualizar-usuarios.component.html',
  styleUrls: ['./atualizar-usuarios.component.css']
})
export class AtualizarUsuariosComponent implements OnInit {

  usuario:IUsuario={
    nome:null,
    nascimento:null,
    idade:null,
    senha:null
  };

  constructor(
    private UsuariosService:UsuariosService,
    private router:Router,
    private activatedRouter:ActivatedRoute) { }
    ngOnInit(): void {
      const id=Number(this.activatedRouter.snapshot.paramMap.get('id'));
      this.UsuariosService.buscarPorId(id).subscribe(retorno=>{
        this.usuario=retorno;
      });
    }

    salvarUsuario():void{
      this.UsuariosService.atualizar(this.usuario).subscribe(retorno=>{
          this.usuario=retorno;
          this.UsuariosService.exibirMensagem(
            'SISTEMA',
            `${this.usuario.nome} foi atualizado com sucesso.`,
            'toast-success'
          )
      });
      this.router.navigate(['/usuarios']);
   }
}
