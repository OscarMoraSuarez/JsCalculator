/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0

}


/*=============================================
OBJETO CON LOS MÉTODOS DE LA CALCULADORA
=============================================*/

var m = {

    inicio: function() {

        for (var i = 0; i < p.teclas.length; i++) {

            p.teclas[i].addEventListener("click", m.oprimirTecla)

        }
    },

    oprimirTecla: function(tecla) {

        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;

        m.calculadora(p.accion, p.digito);

    },

    calculadora: function(accion, digito) {

        switch (accion) {

            case "numero":

                p.cantidadSignos = 0;

                if (p.operaciones.innerHTML == 0) {
                    p.operaciones.innerHTML = digito;
                } else {
                    p.operaciones.innerHTML += digito;
                }

                break;

            case "signo":

                p.cantidadSignos++

                    if (p.cantidadSignos == 1) {

                        if (p.operaciones.innerHTML == 0) { /* Si no hay un digito precediendo a un signo no escribe signo */
                            p.operaciones.innerHTML = 0;
                        } else {
                            p.operaciones.innerHTML += digito; /* de los contrario deja escribir una cantidad  y luego un signo */
                        }

                    }

                break;

            case "decimal":

                console.log("decimal");

                break;

            case "igual":

                console.log("igual");

                break;

        }

    },

    borrarCalculadora: function() {

        p.operaciones.innerHTML = 0;

    }

}

m.inicio();