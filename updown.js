var Elevador = /** @class */ (function () {
    function Elevador(paraPT) {
        this.pisosTotales = paraPT; //paraPT es el parametro de los pisos totales
        this.pisoActual = 1;
        this.estadoPuerta = 0;
    }
    Elevador.prototype.getPisosTotales = function () {
        return this.pisosTotales;
    };
    Elevador.prototype.getPisoActual = function () {
        return this.pisoActual;
    };
    Elevador.prototype.getEstadoPuerta = function () {
        return this.estadoPuerta;
    };
    Elevador.prototype.abrirPuerta = function () {
        if (this.getEstadoPuerta() == 0) {
            return this.estadoPuerta = 1;
        }
    };
    Elevador.prototype.cerrarPuerta = function () {
        if (this.getEstadoPuerta() == 1) {
            return this.estadoPuerta = 0;
        }
    };
    Elevador.prototype.subir = function () {
        this.pisoActual++;
        console.log('Subiendo...');
    };
    Elevador.prototype.bajar = function () {
        this.pisoActual--;
        console.log('Bajando...');
    };
    Elevador.prototype.irPiso = function (pisoDestino) {
        if (pisoDestino >= 1 && pisoDestino <= 5 && this.getEstadoPuerta() == 0) {
            if (pisoDestino > this.getPisoActual()) {
                while (this.getPisoActual() < pisoDestino) {
                    this.subir();
                }
            }
            else if (pisoDestino < this.getPisoActual()) {
                while (this.getPisoActual() > pisoDestino) {
                    this.bajar();
                }
            }
        }
    };
    return Elevador;
}());
var ele1 = new Elevador(5);
console.log(ele1.irPiso(3));
console.log(ele1.irPiso(1));
console.log(ele1.getPisoActual());
