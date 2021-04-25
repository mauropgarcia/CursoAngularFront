import { IUsuario } from './../model/IUsuarios.models';
import { IProduto } from './../model/IProduto.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL:string = 'https://my-json-server.typicode.com/mauropgarcia/CursoAngularBack/usuarios';
  constructor(private http: HttpClient, private toastr:ToastrService) { }

  buscarTodos(): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.URL).pipe(
       map(retorno=>retorno),
       catchError(erro=>this.exibeErro(erro))
    );
 }

 excluir(id:number):Observable<any>{
  return this.http.delete<any>(`${this.URL}/${id}`).pipe(
    map(retorno=>retorno),
    catchError(erro=>this.exibeErro(erro))
 );
}

buscarPorId(id:number): Observable<IUsuario>{
  return this.http.get<IUsuario>(`${this.URL}/${id}`).pipe(
     map(retorno=>retorno),
     catchError(erro=>this.exibeErro(erro))
  );
}

cadastrar(usuario:IUsuario):Observable<IUsuario>{
  return this.http.post<IUsuario>(this.URL, usuario).pipe(
    map(retorno=>retorno),
    catchError(erro=>this.exibeErro(erro))
 );
}

atualizar(usuario:IUsuario):Observable<IUsuario>{
  return this.http.put<IUsuario>(`${this.URL}/${usuario.id}`, usuario).pipe(
    map(retorno=>retorno),
    catchError(erro=>this.exibeErro(erro))
 );
}

 exibeErro(e:any):Observable<any>{
  this.exibirMensagem('ERRO!','Não foi possível realizar a operação','toast-error');
  return EMPTY;
 }

 exibirMensagem(titulo:string,mensagem:string,tipo:string):void{
  this.toastr.show(mensagem, titulo,{closeButton:true, progressBar:true},tipo);
}

}
