var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precioBase, color, consumoEnergetico, peso) {
        this.precioBase = precioBase || 0;
        this.color = this.comprobarColor(color) || "blanco";
        this.consumoEnergetico =
            this.comprobarConsumoEnergetico(consumoEnergetico) || "F";
        this.peso = peso || 0;
    }
    Electrodomestico.prototype.getPrecioBase = function () {
        console.log(this.precioBase);
    };
    Electrodomestico.prototype.getColor = function () {
        console.log(this.color);
    };
    Electrodomestico.prototype.getConsumoEnegetico = function () {
        console.log(this.consumoEnergetico);
    };
    Electrodomestico.prototype.getPeso = function () {
        console.log(this.peso);
    };
    Electrodomestico.prototype.comprobarConsumoEnergetico = function (letra) {
        var consumosValidos = ["A", "B", "C", "D", "E", "F"];
        //esta linea en javascript era con un includes, pero al pasarlo a type me he vuelto loco buscando
        //la alternativa
        if (consumosValidos.indexOf(letra.toUpperCase()) !== -1) {
            return letra;
        }
        return "F";
    };
    Electrodomestico.prototype.comprobarColor = function (color) {
        var coloresValidos = [
            "blanco",
            "negro",
            "rojo",
            "azul",
            "gris",
        ];
        var normalizedColor = color.toLowerCase();
        //igual que arriba
        if (coloresValidos.indexOf(normalizedColor) !== -1) {
            return normalizedColor;
        }
        return "blanco";
    };
    Electrodomestico.prototype.precioFinal = function (consumo, tamano) {
        var precioFinal = this.precioBase;
        switch (consumo) {
            case "A":
                precioFinal += 100;
                break;
            case "B":
                precioFinal += 80;
                break;
            case "C":
                precioFinal += 60;
                break;
            case "D":
                precioFinal += 50;
                break;
            case "E":
                precioFinal += 30;
                break;
            case "F":
                precioFinal += 10;
                break;
        }
        if (tamano <= 20) {
            precioFinal += 10;
        }
        else if (tamano > 20 && tamano <= 50) {
            precioFinal += 50;
        }
        else if (tamano > 50 && tamano <= 80) {
            precioFinal += 80;
        }
        else if (tamano > 80) {
            precioFinal += 100;
        }
        return precioFinal;
    };
    return Electrodomestico;
}());
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precioBase, color, consumoEnergetico, peso, carga) {
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.carga = carga || 5;
        return _this;
    }
    Lavadora.prototype.precioFinal = function () {
        var precioLavadora = _super.prototype.precioFinal.call(this, this.consumoEnergetico, this.peso);
        if (this.carga >= 30) {
            precioLavadora += 50;
        }
        return precioLavadora;
    };
    return Lavadora;
}(Electrodomestico));
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television(precioBase, color, consumoEnergetico, peso, resolucion, is_4k) {
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.resolucion = resolucion || 20;
        _this.is_4k = is_4k || false;
        return _this;
    }
    Television.prototype.precioFinal = function () {
        var precioTelevision = _super.prototype.precioFinal.call(this, this.consumoEnergetico, this.peso);
        if (this.resolucion > 40) {
            precioTelevision = precioTelevision * 1.3;
        }
        if (this.is_4k) {
            precioTelevision += 50;
        }
        return precioTelevision;
    };
    return Television;
}(Electrodomestico));
var mainApp = /** @class */ (function () {
    function mainApp() {
        this.electrodomesticos = [];
        this.electrodomesticos = [
            new Lavadora(400, "marronmierda", "X", 30, 10),
            new Television(600, "blanco", "B", 10, 50, true),
            new Electrodomestico(200, "rojo", "C", 15),
            new Lavadora(350, "azul", "F", 25, 7),
            new Television(800, "azul", "A", 20, 32, false),
            new Electrodomestico(150, "gris", "E", 12),
            new Lavadora(300, "blanco", "C", 40, 15),
            new Television(700, "blanco", "A", 18, 42, true),
            new Electrodomestico(250, "negro", "C", 8),
            new Television(900, "negro", "A", 22, 55, true),
        ];
        var precioTotal = 0;
        var precioTotalLavadoras = 0;
        var precioTotalTelevisiones = 0;
        this.electrodomesticos.forEach(function (element) {
            var precio = element.precioFinal(element.consumoEnergetico, element.peso);
            console.log(element.peso);
            precioTotal = precioTotal + precio;
            if (element instanceof Lavadora) {
                precioTotalLavadoras += precio;
            }
            else if (element instanceof Television) {
                precioTotalTelevisiones += precio;
            }
        });
        console.log("Precio Total: " + precioTotal);
        console.log("Precio Total de Lavadoras: " + precioTotalLavadoras);
        console.log("Precio Total de Televisiones: " + precioTotalTelevisiones);
    }
    return mainApp;
}());
var launchApp = new mainApp();
