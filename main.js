function tocandoSom (seletordeAudio) {
const elemento = document.querySelector(seletordeAudio);

    if (elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else {
        console.log('Elemento ou Seletor são inválidos')
    }

}

const listadasteclas = document.querySelectorAll('.tecla');

// Sincronizando - som com teclas

//for = para
 
for (let contador = 0; contador < listadasteclas.length; contador++) {

    const tecla = listadasteclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`;


    tecla.onclick = function(){
       tocandoSom(idaudio) 

    }

    tecla.onkeydown = function (eventTeclas) {
        
        //console.log(eventTeclas.code == 'Space');
        
        if (eventTeclas === 'Space' || eventTeclas.code === 'Enter') {
        tecla.classList.add('ativa');
    }   
    } 
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    //    console.log(contador)
}