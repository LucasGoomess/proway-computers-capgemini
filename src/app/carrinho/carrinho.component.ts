import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { iProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: iProdutoCarrinho [] = [];
  total = 0;
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}
  
    ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }
  

  calculaTotal(){
    this.total= this.itensCarrinho.reduce((prev, curr)=>prev + (curr.preco * curr.quantidade),0)
  }

  removerProdutoCarrinho(produtoid: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoid);
    this.carrinhoService.removerProdutoCarrinho(produtoid);
    this.calculaTotal()
  }
  comprar(){
    alert("Parabéns você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
