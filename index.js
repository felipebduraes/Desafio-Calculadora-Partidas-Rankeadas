
calcularRankeada(300,50);

// Calcula o saldo de ranqueadas
function calcularRankeada(vitorias, derrotas){
    return saldoVitorias = vitorias - derrotas;
}

let nivel;

// Determina o nível do personagem

if(saldoVitorias < 10){
    nivel = "Ferro"
}

else if(saldoVitorias > 10 && saldoVitorias < 21){
    nivel = "Bronze"
}

else if(saldoVitorias > 20 && saldoVitorias < 51){
    nivel = "Prata"
}

else if(saldoVitorias > 50 && saldoVitorias < 81){
    nivel = "Ouro"
}

else if(saldoVitorias > 80 && saldoVitorias < 91){
    nivel = "Diamante"
}

else if(saldoVitorias > 90 && saldoVitorias < 101){
    nivel = "Lendário"
}

else if(saldoVitorias >= 101){
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);



