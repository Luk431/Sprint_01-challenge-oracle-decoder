
function encode(){
    var resultado = " ";
    const blanks = "";
    var text = document.getElementById("ingresoTexto").value;
    var textEncript = document.getElementById("encriptTexto");

    //Hace aparecer el lado derecho si se escribe algo
        textEncript.hidden = false;
        document.getElementById("imagen-Encript").hidden = true;
        document.getElementById("copiar-Texto").hidden = false;
        
        for(let x = 0; x < text.length; x++){
            switch (text.substring(x,x+1)){
                case "a":
                    resultado = resultado.concat(blanks.substring(x,x+1),"ai");
                    break;
                case "e":
                    resultado = resultado.concat(blanks.substring(x,x+1),"enter");
                    break;
                case "i":
                    resultado = resultado.concat(blanks.substring(x,x+1),"imes");
                    break;
                case "o":
                    resultado = resultado.concat(blanks.substring(x,x+1),"ober");
                    break;
                case "u":
                    resultado = resultado.concat(blanks.substring(x,x+1),"ufat");
                    break;
                default:
                    resultado = resultado+text.substring(x,x+1);
                    break;
            }
                
    
        }
        
        if(resultado === " "){
            textEncript.hidden = true;
            document.getElementById("imagen-Encript").hidden = false;
            document.getElementById("copiar-Texto").hidden = true;
        }

        textEncript.innerHTML = resultado;
        
        document.getElementById("ingresoTexto").value = "";
    
}

function decode(){
    var text = document.getElementById("ingresoTexto").value;
    var textEncript = document.getElementById("encriptTexto");


        text = text.replace(/ai/g, "a");
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");
        
    console.log(text);

    x = 0;

    textEncript.hidden = false;
    document.getElementById("imagen-Encript").hidden = true;
    document.getElementById("copiar-Texto").hidden = false;

    if(text === ""){
        textEncript.hidden = true;
        document.getElementById("imagen-Encript").hidden = false;
        document.getElementById("copiar-Texto").hidden = true;
    }

    textEncript.innerHTML = text;
    
    document.getElementById("ingresoTexto").value = "";    
}

function copyText(){
    var content = document.getElementById("encriptTexto");

    content.select();
    document.execCommand('copy');

    document.getElementById("encriptTexto").innerHTML = "";

    alert("Copiado al portapapeles");
}