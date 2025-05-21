let alturaCriança = 1.35;

let podeMontanhaRussa = false;
let podeRodaGigante = false;
let podeBateBate = false;

if (alturaCriança >= 1.5) {
    podeMontanhaRussa = true;
}

if (alturaCriança >= 1.2) {
    podeRodaGigante = true;
}

if (alturaCriança >= 1.1) {
    podeBateBate = true;
}

console.log("Pode brincar na Montanha-russa?", (podeMontanhaRussa ? 'Sim' : 'Não'));
console.log("Pode brincar na Roda Gigante?", (podeRodaGigante ? 'Sim' : 'Não'));
console.log("Pode brincar no Carrinho Bate-bate?", (podeBateBate ? 'Sim' : 'Não'));

//10 pontos