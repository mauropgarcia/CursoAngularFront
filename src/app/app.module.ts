import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';

import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// PIPES: https://angular.io/guide/pipes

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastrarUsuariosComponent } from './components/usuarios/cadastrar-usuarios/cadastrar-usuarios.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { AtualizarUsuariosComponent } from './components/usuarios/atualizar-usuarios/atualizar-usuarios.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastrarProdutoComponent,
    ListarProdutosComponent,
    UsersComponent,
    AtualizarProdutoComponent,
    CadastrarUsuariosComponent,
    ListarUsuariosComponent,
    AtualizarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
