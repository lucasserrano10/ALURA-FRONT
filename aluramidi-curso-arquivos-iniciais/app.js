const listaTeclas = document.querySelectorAll('.tecla')

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

let i = 0

while(i < 9){
    listaTeclas[i].onclick = tocaSomPom;
    i += 1
}