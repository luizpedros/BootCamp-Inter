//Crie uma função que retorne o nome dos membros de um Map que tem o papel ADMIN no sistema
//1° função crie um getAdmin que recebe um map
function getAdmins(map){
    let admins = [];
    //3º dentro do getAdmins, utilize o loop for...of par retornar uma lista com os nomes dos usuarios que são administradores
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

//2º crie um Map e popule-o com nomes e usuários e seus papeis no sisrema
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Josér', 'user');
usuarios.set('Nati', 'Admin');

console.log(getAdmins(usuarios));