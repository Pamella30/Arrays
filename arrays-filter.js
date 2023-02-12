const alunos = ["Pamella", "Ana", "Isabella", "Benjamin"]
const medias = [10, 9, 7.5, 6.5]

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados)