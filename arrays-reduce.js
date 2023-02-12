const salaJs = [3, 9, 4, 5.5, 9]
const salaPhyton = [9, 5, 2]
const salaJava = [4.5, 9, 10, 3]

function calcMedia(notasSala) {
    const somaNotas = notasSala.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaNotas / notasSala.length;

    return media;
}

console.log(`A media da turma e ${calcMedia(salaJs)}`)
console.log(`A media da turma e ${calcMedia(salaJava)}`)
console.log(`A media da turma e ${calcMedia(salaPhyton)}`)