// 1º atividade (criar lista que mostre alunos aprovados)
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1ºB',

    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1ºB',

    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2ºC',

    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2ºC',

    },
];
//Função que recebe array 'alunos' e um numero que representará a media final
function alunosAprovados(array, mediaFinal) {
    let aprovados = [];

    //percorra o array com os alunos cujas notas são maiores ou uguais à media
    for (let i = 0; i < array.length; i++) {
        //tecnica objeto destructuring
        const {nota, nome} = array[i];
        
        if (nota >= mediaFinal) {
            aprovados.push(nome);
        }
        
    }
    return aprovados; 
}
console.log(alunosAprovados(alunos, 5))

