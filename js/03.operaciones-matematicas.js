/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {
    /* selecciono los li que estan en el div, es decir los uq eocntienen los numeros y signos */
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    /* selecciono el id de operaciones que es un Id  alli esta el tablero */
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false

}


/*=============================================
OBJETO CON LOS MÉTODOS DE LA CALCULADORA
=============================================*/

var m = {

    inicio: function() {

        for (var i = 0; i < p.teclas.length; i++) {

            p.teclas[i].addEventListener("click", m.oprimirTecla)
                /* agreo un event listener a cada tecla dentro del ciclo 
			y ejecutom.oprimir tecla */

        }
    },

    oprimirTecla: function(tecla) { /* recibo el parametro de la tecla que se está oprimiendo */

        p.accion = tecla.target.getAttribute("class"); /* captura la calse que dice si es numero signo,decimal o igual */
        p.digito = tecla.target.innerHTML; /* captura el valor del objeto html */

        m.calculadora(p.accion, p.digito); /* ejecutamos el metodoy pasamos los parametros de accion y digito*/

    },

    calculadora: function(accion, digito) { /* recibo la clase de tecla que es y su valor, es decir si es un signo y si no cuannto vale */

        switch (accion) {

            case "numero":

                p.cantidadSignos = 0; /*si recibo un numero la cantidad de signos queda en cero para poder escribir un signo */

                if (p.operaciones.innerHTML == "0") {
                    /* Si el tablero està en cero, este valor se remplazo por el digito que entra 
                    					para que el cero no se quede*/

                    p.operaciones.innerHTML = digito; /* aqui se remplaza con el digito */

                } else {

                    if (p.resultado) { /* Si hay un resultado el resultado se pone en false y nos deja escribir digitos que no se añadan al resultado */

                        p.resultado = false;
                        p.operaciones.innerHTML = digito; /* Se reamplaza el resultado por el digito */


                    } else { /* Si no hay resultado simplemente nos deja agragar digitos */

                        p.operaciones.innerHTML += digito;
                    }

                }


                break;

            case "signo":

                p.cantidadSignos++ /* Si entra un signo se incrementa la cantidad de signos que era cero */

                    if (p.cantidadSignos == 1) { /* Si la cantidad de signos es 1 */

                        if (p.operaciones.innerHTML == "0") { /* Si el valor en el tablero es  0 no me deja escribir un signo*/

                            p.operaciones.innerHTML = 0; /* se define  el tablero en cero */

                        } else {

                            p.operaciones.innerHTML += digito; /* Si no esta en cero Se agrega el signo y el digito */

                            p.cantidadDecimal = false; /* cantidad es false apra poder poner decimales*/

                            p.resultado = false; /* resultado es false dado que no hemos terminado de operar */

                        }

                    }

                break;

            case "decimal":

                if (!p.cantidadDecimal && p.cantidadSignos != 1) {
                    /* si no hay un decimal y cantidad de signos es distinto de 1 
                    					deja escribir digito */

                    p.operaciones.innerHTML += digito;

                    p.cantidadDecimal = true; /* si se escribe el decimal se pasa el valor a true y no dejara escribir mas decimal */

                    p.resultado = false; /* el resultado es false dado que  estamso operando */

                }

                break;

            case "igual":

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML); /*  Si entra un igual se evalua el contenido deel tablero */

                p.resultado = true; /* y se define el resultado a true */

                break;

        }

        console.log("p.resultado", p.resultado);

    },

    borrarCalculadora: function() { /* si se borra la calculadora el resultado se define en false apra poder escribir operaciones */

        p.resultado = false;
        p.operaciones.innerHTML = 0; /* se define el tablero en cero */

    }

}

m.inicio(); /* se ejecuta el inicio */
