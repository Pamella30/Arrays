const notas = [4, 6, 8.5, 9];

let somaNotas = 0;

notas.forEach (function(nota, indice){
    somaNotas += nota;
    console.log(`Esse e o indice ${indice} estas sao as notas ${notas}`)
})

const media = somaNotas / notas.length
console.log(`A media das notas e igual ${media}`)

// forEach e um metodo do arrays que recebe uma funcao anonima como parametro