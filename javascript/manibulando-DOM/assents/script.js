
function changeMode(){
    changeClass();
    changeText();
}
//para mudae as classes das cores.
function changeClass(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}
//função para mudar os nomes.
function changeText(){
    if (body.classList.contains('dark-mode')) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode On";
        return;
    }
    button.innerHTML = "Dark Mode On";
    h1.innerHTML = "Light Mode";
}
//parachamar os elementos que vão ser alterados.
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');


button.addEventListener('click', changeMode);