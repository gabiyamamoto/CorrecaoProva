let pedido = 1;
let nomeCombo = "";
let preco = 0;

switch (pedido) {
    case 1:
        nomeCombo = "Batata + Suco";
        preco = 12;
        break;
    case 2:
        nomeCombo = "Hamburguer";
        preco = 15;
        break;
    case 3:
        nomeCombo = "Pizza Broto";
        preco = 20;
        break;
    default:
        console.log("Opção inválida");
        break;
}

if (nomeCombo != "") {
    console.log("Combo escolhido: ", nomeCombo);
    console.log("Preço: ", preco);
}

//10 pontos