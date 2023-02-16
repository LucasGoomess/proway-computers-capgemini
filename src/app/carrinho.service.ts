import { Injectable } from '@angular/core';
import { iProdutoCarrinho, Iprodutos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  [x: string]: any;
  itens: iProdutoCarrinho [] = [];
  constructor() { }
  obtemCarrinho( ) {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }
  adicionarAoCarrinho(produto: iProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON .stringify(this.itens));
  }

  removerProdutoCarrinho(produtoid:number){
    this.itens= this.itens.filter(item => item.id !== produtoid);
    localStorage.setItem("carrinho", JSON .stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
