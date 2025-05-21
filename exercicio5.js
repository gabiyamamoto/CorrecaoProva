let valores = [2, 32, 10, 11, 70, -1];
let i = 0;
let maior = valores[0];

while (i < valores.length) {
    if (valores[i] > maior) {
        maior = valores[i];
    }
    i++;
}

console.log(maior);

//10 pontos