import logo from '../../assets/logo.png'
import abobora from '../../assets/frutas/Abóbora.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import tomate from '../../assets/frutas/Tomate.png'

const cesta ={
    topo:{
        titulo:"Detalhes da cesta",
    },
    detalhes:{
        nome: "Cesta de Verduras",
        imagemFazenda:logo,
        fazenda: "Jenny Jack Farm",
        descricao: "Uma cesta de prudutos selecionados cuidadosamente da fazenda direto para a sua cozinha",
        preco:"40,00",    
        botao:"Comprar",    


    },
    itens:{

        titulo:'Itens da cesta',
        lista:[
            {
                nome:"Abóbora",
                imagem: abobora,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome :" Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Tomate",
                imagem: tomate,
            },

        ]
    }
}

export default cesta;
