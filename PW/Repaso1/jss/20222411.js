/*Alumno: ABC XYZ
Código: 20222411
*/

function generarTabla(){
    //Matriz donde se guardan los números
    let matriz = [];
    let numero = document.getElementById("numero").value;

    if(numero==' '){
        alert("Debe ingresar las dimensiones de la tabla.")
        return;
    }

    //Generar los números del cuadrado
    let hasta = numero * numero;
    for(let i=1; i<= hasta; i++){
        matriz.push(i);
    }
    
    //Desordenar matriz
    matriz = desordenarArray(matriz);

    //Manejar los colores
    let colorBorde = ' ';
    let colorContenido = ' ';
    //Seleccion del usuario
    let seleccion = document.querySelector('input[name="rcolor"]:checked').value
    if(seleccion == 'A'){
        //Aleatorio
        //El color se genera usando RGB(r, g, b)
        colorBorde = colorAleatorio();
        colorContenido = colorAleatorio();
    } else{
        colorBorde = document.getElementById("bcolor").value;
        colorContenido = document.getElementById("ccolor").value;
    }

    //Mostrar la Tabla
    let tabla = document.createElement("table");
    for(let i=0;i<numero;i++){
        let fila = document.createElement("tr");
        for(let j=0; j<numero;j++){
            let celda = document.createElement("td");
            let indice = i*numero + j;
            celda.textContent = matriz[indice];
            
            celda.style.border = "2px solid" + colorBorde;
            celda.style.backgroundColor = colorContenido;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    //Colgarlo en el DOM para verlo
    let contenido = document.getElementById("rpta");
    //Limpiar el Valor Anterior
    contenido.innerHTML = " ";
    contenido.appendChild(tabla);
}

//Algoritmo de Fisher-Yates es equivalente a Python shuffle
function desordenarArray(arr){
    for(let i= arr.length-1; i>0;i--){
        let j= Math.floor( Math.random()*(i + 1));
        //Intercambiar posiciones
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr;
}

function colorAleatorio(){
    let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        cadenaRGB = `rgb(${r} , ${g} , ${b})` 
        return cadenaRGB;
}

