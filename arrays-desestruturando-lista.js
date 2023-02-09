const aluno = ["Pamella", "Marlene", "Patricia", "Beatriz", "Leonardo", "Gildo", "Ana"];
const media = [10, 9, 6, 9.5, 8, 6, 8.5];

const listaDeAlunos = [aluno, media];

function exibeNomeNota(aluno){

    if (listaDeAlunos[0].includes(aluno)){
        //const alunos = listaDeAlunos[0];
        //const medias = listaDeAlunos[1];
        //Outra forma de escrever o que esta comentado acima e escrever da forma da linha de codigo abaixo

        const [alunos, medias] = listaDeAlunos

        const indice = alunos.indexOf(aluno)

        const mediaAluno = medias[indice]

        console.log(`${aluno} tem a media ${mediaAluno}.`)
    }else {
        console.log(`${aluno} nao esta cadastrado!`)
    }
}

exibeNomeNota("Marlene")
exibeNomeNota("Gildo")
exibeNomeNota("Joaquim")