/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null

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

        m.calculadora(p.accion);

    },

    calculadora: function(accion) {

        switch (accion) {

            case "numero":

                console.log("numero");

                break;

            case "signo":

                console.log("signo");

                break;

            case "decimal":

                console.log("decimal");

                break;

            case "igual":

                console.log("igual");

                break;

        }

    }

}

m.inicio();