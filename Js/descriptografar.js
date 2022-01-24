const btnDescriptografar = document.querySelector("#sendDescriptografar");

//Funcão botao
function btn1(){
    const descriptografar = document.querySelector("#descriptografar");
    const valueDescriptografar = descriptografar.value;

    return valueDescriptografar;
}

// Função descriptografar
function descriptoAlgoritmo(texto){
    
    var dados = btn1();
    var texto = "";
    var leitor;
    var contador = 0;
    var j;
    
    for(j = 0 ; j < dados.length; j++){
        
        contador++;
        leitor = (ASC(dados.substr(j, 1)))- 2;

        if(contador == 50){
            contador = 1;
        }

        if( leitor < 30||leitor >125){
            leitor += 126;

        }

        texto += (char(leitor));

    }

    document.getElementById("criptografar").value = texto;
    document.getElementById("descriptografar").value = "";

}
//botao ação
btnDescriptografar.addEventListener("click", function btnEventDes(a){

    a.preventDefault();
    btn1();
    descriptoAlgoritmo(btn1());
    
    
  
});