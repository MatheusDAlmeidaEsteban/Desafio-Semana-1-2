const btnCriptografar = document.querySelector("#sendCriptografar");

//Funcão botao
function btn(){
    const criptografar = document.querySelector("#criptografar");
    const valueCriptografar = criptografar.value;

    return valueCriptografar;
}

//Codificadores de dados
function ASC(String){
    return String.charCodeAt(0);
}
function char(ascii){
    return String.fromCharCode(ascii);
}

//Função criptografar
function criptoAlgoritmo(texto){
    var dados = btn();
    var texto = "";
    var leitor;
    var contador = 0;
    var i;
    
    for(i = 0 ; i < dados.length; i++){
        contador++;
        leitor = (ASC(dados.substr(i, 1))) + 15;
        if(contador == 50){
            contador = 1;
        }

        if( leitor <31||leitor > 125){
            leitor -= 126;

        }

        texto += (char(leitor));
    }

    document.getElementById("descriptografar").value = texto;
    document.getElementById("criptografar").value = "";
}

//botao ação
btnCriptografar.addEventListener("click", function btnEvent(e){

    e.preventDefault();
    btn();
    criptoAlgoritmo(btn());

  
});




