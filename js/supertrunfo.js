const cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaNaruto, cartaHarry, cartaMarvel];

var pontosJogador = 0;
var pontosMaquina = 0;