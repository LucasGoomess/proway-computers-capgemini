import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs';
import { Iprodutos, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit{
  produtos: Iprodutos[] | undefined;


constructor(
  private produtoservice: ProdutosService,
  private route: ActivatedRoute
  ){ }
  
ngOnInit():void{
  const produtos = this.produtoservice.getAll();
  this.route.queryParamMap.subscribe(params =>{
  const descricao = params.get("descricao")?.toLocaleLowerCase();

  if (descricao){
    this.produtos = produtos.filter(produtos => produtos.descricao.toLowerCase().includes(descricao));
    return;
  }
  this.produtos = produtos;
 });
}
  
}

