// Exibindo mensagens no console
console.log("Olá, Mundo!");

// Declaração de variáveis
let x = 5;
x = 10;
console.log(x);

const y = 20;
console.log(y);

// Função reutilizável
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 4));

// Estruturas condicionais
if (x > 10) {
    console.log("Maior");
} else {
    console.log("Menor ou igual");
}

// Loop for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Selecionando elementos HTML
document.querySelector("#idElemento").innerHTML = "Novo Conteúdo";

// Adicionando eventos a elementos HTML
document.querySelector("button").addEventListener("click", () => {
    console.log("Clique!");
});

// Manipulação de arrays
console.log([1, 2, 3].map(num => num * 2));

// Requisição HTTP com fetch
fetch('https://api.exemplo.com')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro na requisição", error));

// Estruturas condicionais avançadas
if (x > 10) {
    console.log("Maior que 10");
} else if (x === 10) {
    console.log("Igual a 10");
} else {
    console.log("Menor que 10");
}

// Switch case
let dia = "segunda";
switch (dia) {
    case "segunda":
        console.log("Trabalhar");
        break;
    default:
        console.log("Descansar");
}

// Loop while
while (x < 15) {
    console.log(x);
    x++;
}

// Loop do while
do {
    console.log(x);
    x++;
} while (x < 20);

// Uso de break e continue
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

// Manipulação de arrays
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr.length);