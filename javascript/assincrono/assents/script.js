//1º Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch()
//uma coisa muito comum de se fazer quando é para armazenar o endereço da API é criar uma contante "const: BASE_URL ="
const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //link para a api
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }catch(e){
        console.log(e.message);
    }
}

const loadImg = async () =>{
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

