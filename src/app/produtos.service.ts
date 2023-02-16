import { Injectable } from '@angular/core';
import { Iprodutos, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos:Iprodutos[] = produtos;
  constructor() { }
 
  getAll(){
    return this.produtos;
  }
  getOne(produtoid:number){
    return  this.produtos.find(produto=> produto.id =produto.id)
  }
}
