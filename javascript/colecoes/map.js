//Crie uma função que retorne o nome dos membros de um Map que tem o papel ADMIN no sistema
//1° primeiro crie um getAdmin que recebe um map
function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Josér', 'user');
usuarios.set('Nati', 'Admin');

console.log(getAdmins(usuarios));