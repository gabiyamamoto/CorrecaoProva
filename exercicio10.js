let ataques = [20, 35, 50, 40, 15];
let vidaFortaleza = 300;

for (let i = 0; i < ataques.length; i++) {
    vidaFortaleza -= ataques[i];
}

if (vidaFortaleza > 0) {
    console.log("Forteleza resistiu com", vidaFortaleza, "pontos de vida!");
} else {
    console.log("Fortelza foi destruída!");
}

//20 pontos