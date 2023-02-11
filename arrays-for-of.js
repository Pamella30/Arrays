const notas = [5, 6, 9, 2];

let somaNotas = 0

for (let nota of notas){
    somaNotas += nota
}

const media = somaNotas / notas.length;
console.log(`A media das notas e ${media}`);