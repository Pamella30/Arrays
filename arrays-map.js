const notas = [10, 9, 8, 7];

const notasAtualizadas = notas.map((nota) => {
    return nota >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas)

//Aqui foi usado arrow function e operador ternario