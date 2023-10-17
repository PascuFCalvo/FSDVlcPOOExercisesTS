//probando interfaces, tanto la clase serie como la clase videojuego han de cumplir esto
//clase serie con todos los metodos getter y setter
var SERIE = /** @class */ (function () {
    function SERIE(titulo, numeroDeTemporadas, entregado, genero, creador) {
        this.titulo = titulo;
        this.numeroDeTemporadas = numeroDeTemporadas || 3;
        this.entregado = entregado || false;
        this.genero = genero;
        this.creador = creador;
    }
    SERIE.prototype.getTitulo = function () {
        return this.titulo;
    };
    SERIE.prototype.getNumeroDeTemporadas = function () {
        return this.numeroDeTemporadas;
    };
    SERIE.prototype.getGenero = function () {
        return this.genero;
    };
    SERIE.prototype.getCreador = function () {
        return this.creador;
    };
    SERIE.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    SERIE.prototype.setNumeroTemporadas = function (numeroDeTemporadas) {
        this.numeroDeTemporadas = numeroDeTemporadas;
    };
    SERIE.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    SERIE.prototype.setCrador = function (creador) {
        this.creador = creador;
    };
    SERIE.prototype.entregar = function () {
        this.entregado = true;
    };
    SERIE.prototype.devolver = function () {
        this.entregado = false;
    };
    SERIE.prototype.isEntregado = function () {
        return this.entregado;
    };
    return SERIE;
}());
//clase videojuego igual
var VIDEOJUEGO = /** @class */ (function () {
    function VIDEOJUEGO(titulo, horasEstimadas, entregado, genero, compañia) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas || 10;
        this.entregado = entregado || false;
        this.genero = genero;
        this.compañia = compañia;
    }
    VIDEOJUEGO.prototype.getTitulo = function () {
        return this.titulo;
    };
    VIDEOJUEGO.prototype.getHorasEstimadas = function () {
        return this.horasEstimadas;
    };
    VIDEOJUEGO.prototype.getGenero = function () {
        return this.genero;
    };
    VIDEOJUEGO.prototype.getCompañia = function () {
        return this.compañia;
    };
    VIDEOJUEGO.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    VIDEOJUEGO.prototype.setHorasEstimadas = function (horas) {
        this.horasEstimadas = horas;
    };
    VIDEOJUEGO.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    VIDEOJUEGO.prototype.setCompañia = function (compañia) {
        this.compañia = compañia;
    };
    VIDEOJUEGO.prototype.entregar = function () {
        this.entregado = true;
    };
    VIDEOJUEGO.prototype.devolver = function () {
        this.entregado = false;
    };
    VIDEOJUEGO.prototype.isEntregado = function () {
        return this.entregado;
    };
    return VIDEOJUEGO;
}());
//AQUI IRIA EL CODIGO DEL "PROGRAMA PRINCIPAL"
//se crea array de series y videojuegs
var series = [
    new SERIE("Breakin Bad", 7, false, "Suspense", "Walter White"),
    new SERIE("Farmacia de Guardia", 12, true, "Comedia", "Pili"),
    new SERIE("Policias Polis", 4, false, "Comedia", "Peter McAlister"),
    new SERIE("Conan", 2, false, "Accion", "Robin Rabinator"),
    new SERIE("Estar Guars ", 8, false, "Accion", "Darth Vader de todos los santos"),
];
var videojuegos = [
    new VIDEOJUEGO("Dark Souls", 13, false, "accion", "From Software"),
    new VIDEOJUEGO("Carlos Duty", 5, true, "shooter", "ActiVision"),
    new VIDEOJUEGO("Residente Vil", 20, false, "terror", "Konami"),
    new VIDEOJUEGO("El fifa", 200, false, "futbol", "EA chinegein"),
    new VIDEOJUEGO("Payaso horripilante horror abuelita miedo", 1, true, "accion", "un random"),
];
//probar si utilizando el metodo entregar cambia el atributo entregadod e false a true
videojuegos[2].entregar();
series[4].entregar();
console.log(videojuegos[2]);
console.log(series[4]);
//contar el total de series y videojuegos entregados
//e imprimirlos junto al titulo de los elementos entregados
var contarEntregados = function (series, videojuegos) {
    var videojuegosEntregados = 0;
    var seriesEntregadas = 0;
    var titulosSeriesEntregadas = [];
    var titulosVideojuegosEntregados = [];
    videojuegos.forEach(function (videojuego) {
        if (videojuego.isEntregado() === true) {
            videojuegosEntregados++;
            titulosVideojuegosEntregados.push(videojuego.getTitulo());
        }
    });
    series.forEach(function (serie) {
        if (serie.isEntregado() === true) {
            seriesEntregadas++;
            titulosSeriesEntregadas.push(serie.getTitulo());
        }
    });
    console.log("Total series entregadas : ".concat(seriesEntregadas, " y son ").concat(titulosSeriesEntregadas));
    console.log("Total juegos entregados : ".concat(videojuegosEntregados, " y son ").concat(titulosVideojuegosEntregados));
};
//calcular que videjuego es el mas largo y la serie con mas temporadas e imprimirlas por pantalla
var calcularMasLarga = function (series, videojuegos) {
    var serieMasLarga = series.reduce(function (serieMax, serie) {
        if (!serieMax || serie.getNumeroDeTemporadas() > serieMax.getNumeroDeTemporadas()) {
            return serie;
        }
        return serieMax;
    }, null);
    var videojuegoMasLargo = videojuegos.reduce(function (videojuegoMax, videojuego) {
        if (!videojuegoMax || videojuego.getHorasEstimadas() > videojuegoMax.getHorasEstimadas()) {
            return videojuego;
        }
        return videojuegoMax;
    }, null);
    console.log("Serie mas larga: ".concat(serieMasLarga.getTitulo()));
    console.log("Videojuego mas largo: ".concat(videojuegoMasLargo.getTitulo()));
};
calcularMasLarga(series, videojuegos);
contarEntregados(series, videojuegos);
