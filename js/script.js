const matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

let textArea = document.querySelector('.caja-texto');
let mensaje = document.querySelector('.resultado');
let muneco = document.querySelector('.main__section2__muneco');
let resultado = document.querySelector('.main__section2__avisos');

function encriptar() {
    
    if(textArea.value !== ''){
        muneco.style.display = 'none';
        resultado.style.display = 'none';  
    }else{
        muneco.style.display = 'block';
        resultado.style.display = 'block';
        mensaje.innerHTML = '';
        alert('Debe ingresar algun texto para encriptar.');
        return;
    }

    let texto = (textArea.value).toLowerCase();
    console.log(texto);

    for(let i=0; i<matrizCodigo.length; i++){
        
        if(texto.includes(matrizCodigo[i][0])){
            
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    mensaje.innerHTML = texto;
    textArea.value = '';
}

function desencriptar() {

    if(textArea.value !== ''){
        muneco.style.display = 'none';
        resultado.style.display = 'none';    
    }else{
        muneco.style.display = 'block';
        resultado.style.display = 'block';
        mensaje.innerHTML = '';
        alert('Debe ingresar algun texto para desencriptar.');
        return;
    }
    
    let texto = (textArea.value).toLowerCase();
    console.log(texto);
    
    for(let i=0; i<matrizCodigo.length; i++){
        
        if(texto.includes(matrizCodigo[i][1])){

            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    mensaje.innerHTML = texto;
    textArea.value = '';
}

async function copiarTexto() {
    let texto = mensaje.innerText.toLowerCase();
    
    try {
        await navigator.clipboard.writeText(texto);
        alert('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}