//botao de copiar Descriptografar
document.getElementById("botaoCripto").addEventListener("click", function(){
    document.getElementById("criptografar").select();
    document.execCommand("copy");
    alert("Texto copiado")
});

//botao de copiar Descriptografar
document.getElementById("botaodescripto").addEventListener("click", function(){
    document.getElementById("descriptografar").select();
    document.execCommand("copy");
    alert("Texto copiado")
});

