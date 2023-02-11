const notas = [4, 3.5, 6, 8]

let somaNotas = 0

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

const media = somaNotas / notas.length

console.log(`A media das notas e ${media}`)

