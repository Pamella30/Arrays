const aluno = ["Pamella", "Marlene", "Patricia", "Beatriz", "Leonardo", "Gildo", "Ana"];
const media = [10, 9, 6, 9.5, 8, 6, 8.5];

const listaDeAlunos = [aluno, media];

function exibeNomeNota(aluno){

    if (listaDeAlunos[0].includes(aluno)){
        const indice = listaDeAlunos[0].indexOf(aluno)

        const mediaAluno = listaDeAlunos[1][indice]

        console.log(`${aluno} tem a media ${mediaAluno}.`)
    }else {
        console.log(`${aluno} nao esta cadastrado`)
    }
}

exibeNomeNota("Marlene")