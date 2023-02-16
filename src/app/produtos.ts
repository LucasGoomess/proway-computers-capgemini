export interface Iprodutos{
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque:number;
    imagem: string;
}
export interface iProdutoCarrinho extends Iprodutos{
    quantidade:number;
}

export const produtos : Iprodutos [] =[
    {id:1, descricao:"Mouse Gamer",preco: 439.00,  descricaoPreco:"À vista no Pix", imagem:"./assets/mouse-3.jpg",quantidadeEstoque:20},
    {id:2, descricao:"Monitor muito bom",preco: 1200.50,  descricaoPreco:"À vista no Pix",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:10},
    {id:3, descricao:"Teclado excelente",preco: 749.00,  descricaoPreco:"À vista no Pix", imagem:"./assets/teclado-1.jpg",quantidadeEstoque:10},
    {id:4, descricao:"Fone de ouvido para quem joga FPS",preco: 599.99,  descricaoPreco:"À vista no Pix", imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},
    {id:5, descricao:"Fone de ouvido",preco: 299.99,  descricaoPreco:"À vista no Pix", imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},
    {id:6, descricao:"Fone de ouvido bom",preco: 399.99,  descricaoPreco:"À vista no Pix", imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},
    {id:7, descricao:"HD 1TR",preco: 499.99,  descricaoPreco:"À vista no Pix", imagem:"./assets/hd.jpg",quantidadeEstoque:10},
    {id:8, descricao:"Combo de placa de videos",preco: 18449.99,  descricaoPreco:"À vista no Pix", imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},
    {id:9, descricao:"processador Ryzen",preco: 1000.00,  descricaoPreco:"À vista no Pix", imagem:"./assets/processador.jpg",quantidadeEstoque:10},
    {id:10, descricao:"notebook bom",preco: 2500, descricaoPreco:"À vista no Pix", imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},
    {id:11, descricao:"Notebook excelente",preco: 4500.00,  descricaoPreco:"À vista no Pix", imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},
    {id:12, descricao:"Mouse barato",preco: 20,  descricaoPreco:"À vista no Pix", imagem:"./assets/mouse-1.jpg",quantidadeEstoque:10},
    {id:13, descricao:"Mouse ótimo ",preco: 200.00,  descricaoPreco:"À vista no Pix", imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},
    {id:14, descricao:"Mouse pequeno",preco: 50.00,  descricaoPreco:"À vista no Pix", imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},
    {id:15, descricao:"Teclado bom",preco: 159.99,  descricaoPreco:"À vista no Pix", imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10},
]