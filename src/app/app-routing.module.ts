import { AtualizarUsuariosComponent } from './components/usuarios/atualizar-usuarios/atualizar-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { UsersComponent } from './components/users/users.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { CadastrarUsuariosComponent } from './components/usuarios/cadastrar-usuarios/cadastrar-usuarios.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'produtos',component: ListarProdutosComponent},
  {path: 'produtos/cadastrar',component: CadastrarProdutoComponent},
  {path: 'users',component: UsersComponent},
  {path: 'produtos/atualizar/:id',component: AtualizarProdutoComponent},

  {path: 'usuarios',component: ListarUsuariosComponent},
  {path: 'usuarios/cadastrar',component: CadastrarUsuariosComponent},
  {path: 'usuarios/atualizar/:id',component: AtualizarUsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
