// 3 formas de executar 

const nomes = ["Pamella", "Ana", "Isabella"];

nomes.forEach (function(nome){
    console.log(nome)
})


// arrow function
nomes.forEach ((nome) => {
    console.log(nome)
})


//declarando uma funcao
function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome)


