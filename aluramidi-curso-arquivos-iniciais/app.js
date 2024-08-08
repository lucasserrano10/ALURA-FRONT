const listaTeclas = document.querySelectorAll('.tecla')

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play()
    }
    else{
        alert('elemento não encontrado ou seletor não encontrado')
    }
}

for(let i = 0; i < listaTeclas.length ;i += 1){
    const tecla = listaTeclas[i]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function() {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}