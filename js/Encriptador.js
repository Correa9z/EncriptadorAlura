


function Encriptar(){


    var texto = document.getElementById("texto");
    const etiqueta = document.getElementById("mensajeResultado");
    const men = document.getElementById("mensaje1");
    const men2 = document.getElementById("mensaje2");
    const img = document.getElementById("Muñeco");
    const boton = document.getElementById("Copiar");
    
    var array;
    var resultado;
    texto = texto.value;


    if(texto.length != 0){

        array = texto.split("");
        resultado = "";

        for(var i = 0; i < texto.length; i++){

            switch(array[i]){
                case "e":
                    array[i] = "enter";
                    break;
                case "i":
                        array[i] = "imes";
                        break;
                case "a":
                    array[i] = "ai";
                    break;
                case "o":
                    array[i] = "ober";
                    break;
                case "u":
                        array[i] = "ufat";
                        break;


            }


            resultado += array[i];



        }

        console.log(resultado);

        men.style.display = "none";
        men2.style.display = "none";


        if(!(img.style.display == "none")){

            img.style.display = "none"


        }

        

        etiqueta.textContent = resultado;
        
        etiqueta.style.display = "block";

        boton.style.display = "block";


    }







}






//gato gaitober


function Desencriptar(){


    var texto = document.getElementById("texto");
    const etiqueta = document.getElementById("mensajeResultado");
    const men = document.getElementById("mensaje1");
    const men2 = document.getElementById("mensaje2");
    const img = document.getElementById("Muñeco");
    const boton = document.getElementById("Copiar");
    
    var array;
    var resultado;
    var resultado1 = "";
    texto = texto.value;


    if(texto.length != 0){

        array = texto.split("");
        resultado = [];
        var i = 0;


        while( i < texto.length){



            if((i != (texto.length - 1))){

                if((array[i] == "a") && (array[i+1] == "i")){
                    resultado.push("a");
                    
                    i += 2;
    
                }
                if((array[i] == "o") && (array[i+1] == "b")){
                    resultado.push("o");
                    
                    i += 4;
    
    
                }if((array[i] == "n") && (array[i-1] == "e")){
                    resultado += "e";
                    i += 4;
                    
                }if((array[i] == "f") && (array[i-1] == "u")){
                    resultado += "u";
                    i += 3;
                    
                }if((array[i] == "m") && (array[i-1] == "i")){
                    resultado += "i";
                    i += 3;
                    
                }else{
                    resultado.push(array[i]);
                    i += 1;
                }
            }


            


        }

        

        for(var a = 0; a < (resultado.length - 1); a++){
            console.log(resultado[a]);
            resultado1 += resultado[a];
        }

        men.style.display = "none";
        men2.style.display = "none";

        if(!(img.style.display == "none")){

            img.style.display = "none"


        }

        

        etiqueta.textContent = resultado1;
        
        etiqueta.style.display = "block";

        boton.style.display = "block";

}}




function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}




var encrip = document.getElementById("Encriptar");
encrip.onclick = Encriptar;


var dencrip = document.getElementById("Desencriptar");
dencrip.onclick = Desencriptar;


var input = document.getElementById("texto");








