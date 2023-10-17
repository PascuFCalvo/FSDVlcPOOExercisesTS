//probando interfaces, tanto la clase serie como la clase videojuego han de cumplir esto

interface ENTREGABLE {
  entregar(): void;
  devolver(): void;
  isEntregado(): void;
}

//clase serie con todos los metodos getter y setter

class SERIE implements ENTREGABLE {
  private titulo: string;
  private numeroDeTemporadas: number;
  private entregado: boolean;
  private genero: string;
  private creador: string;

  constructor(
    titulo: string,
    numeroDeTemporadas: number,
    entregado: boolean,
    genero: string,
    creador: string
  ) {
    this.titulo = titulo;
    this.numeroDeTemporadas = numeroDeTemporadas || 3;
    this.entregado = entregado || false;
    this.genero = genero;
    this.creador = creador;
  }

  getTitulo(): string {
    return this.titulo;
  }
  getNumeroDeTemporadas(): number {
    return this.numeroDeTemporadas;
  }
  getGenero(): string {
    return this.genero;
  }
  getCreador(): string {
    return this.creador;
  }

  setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  setNumeroTemporadas(numeroDeTemporadas: number) {
    this.numeroDeTemporadas = numeroDeTemporadas;
  }

  setGenero(genero: string) {
    this.genero = genero;
  }

  setCrador(creador: string) {
    this.creador = creador;
  }

  entregar() {
    this.entregado = true;
  }

  devolver() {
    this.entregado = false;
  }

  isEntregado() {
    return this.entregado;
  }
}

//clase videojuego igual

class VIDEOJUEGO implements ENTREGABLE {
  private titulo: string;
  private horasEstimadas: number;
  private entregado: boolean;
  private genero: string;
  private compañia: string;

  constructor(
    titulo: string,
    horasEstimadas: number,
    entregado: boolean,
    genero: string,
    compañia: string
  ) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas || 10;
    this.entregado = entregado || false;
    this.genero = genero;
    this.compañia = compañia;
  }

  getTitulo(): string {
    return this.titulo;
  }
  getHorasEstimadas(): number {
    return this.horasEstimadas;
  }
  getGenero(): string {
    return this.genero;
  }
  getCompañia(): string {
    return this.compañia;
  }
  setTitulo(titulo: string) {
    this.titulo = titulo;
  }
  setHorasEstimadas(horas: number) {
    this.horasEstimadas = horas;
  }
  setGenero(genero: string) {
    this.genero = genero;
  }
  setCompañia(compañia: string) {
    this.compañia = compañia;
  }

  entregar() {
    this.entregado = true;
  }

  devolver() {
    this.entregado = false;
  }

  isEntregado() {
    return this.entregado;
  }
}

//AQUI IRIA EL CODIGO DEL "PROGRAMA PRINCIPAL"

//se crea array de series y videojuegs

const series = [
  new SERIE("Breakin Bad", 7, false, "Suspense", "Walter White"),
  new SERIE("Farmacia de Guardia", 12, true, "Comedia", "Pili"),
  new SERIE("Policias Polis", 4, false, "Comedia", "Peter McAlister"),
  new SERIE("Conan", 2, false, "Accion", "Robin Rabinator"),
  new SERIE("Estar Guars ",8,false,"Accion","Darth Vader de todos los santos"),
];

const videojuegos = [
  new VIDEOJUEGO("Dark Souls", 13, false, "accion", "From Software"),
  new VIDEOJUEGO("Carlos Duty", 5, true, "shooter", "ActiVision"),
  new VIDEOJUEGO("Residente Vil", 20, false, "terror", "Konami"),
  new VIDEOJUEGO("El fifa", 200, false, "futbol", "EA chinegein"),
  new VIDEOJUEGO("Payaso horripilante horror abuelita miedo",1,true, "accion","un random"),
];

//probar si utilizando el metodo entregar cambia el atributo entregadod e false a true

videojuegos[2].entregar();
series[4].entregar();

console.log(videojuegos[2]);
console.log(series[4]);

//contar el total de series y videojuegos entregados
//e imprimirlos junto al titulo de los elementos entregados
let contarEntregados = (series: SERIE[], videojuegos: VIDEOJUEGO[]) => {
  let videojuegosEntregados = 0;
  let seriesEntregadas = 0;
  let titulosSeriesEntregadas: string[] = [];
  let titulosVideojuegosEntregados: string[] = [];

  videojuegos.forEach((videojuego) => {
    if (videojuego.isEntregado() === true) {
      videojuegosEntregados++;
      titulosVideojuegosEntregados.push(videojuego.getTitulo());
    }
  });

  series.forEach((serie) => {
    if (serie.isEntregado() === true) {
      seriesEntregadas++;
      titulosSeriesEntregadas.push(serie.getTitulo());
    }
  });
  console.log(
    `Total series entregadas : ${seriesEntregadas} y son ${titulosSeriesEntregadas}`
  );
  console.log(
    `Total juegos entregados : ${videojuegosEntregados} y son ${titulosVideojuegosEntregados}`
  );
};

//calcular que videjuego es el mas largo y la serie con mas temporadas e imprimirlas por pantalla

let calcularMasLarga = (series: SERIE[], videojuegos: VIDEOJUEGO[]) => {
  let serieMasLarga: SERIE | null = null;
  let videojuegoMasLargo: VIDEOJUEGO | null = null;

  series.forEach((serie) => {
    if (
      !serieMasLarga ||
      serie.getNumeroDeTemporadas() > serieMasLarga.getNumeroDeTemporadas()
    ) {
      serieMasLarga = serie;
    }
    return serieMasLarga;
  });

  videojuegos.forEach((videojuego) => {
    if (
      !videojuegoMasLargo ||
      videojuego.getHorasEstimadas() > videojuegoMasLargo.getHorasEstimadas()
    ) {
      videojuegoMasLargo = videojuego;
    }
  });

  console.log(`Serie mas larga: ${serieMasLarga.getTitulo()}`);
  console.log(`Videojuego mas largo: ${videojuegoMasLargo.getTitulo()}`);
};

calcularMasLarga(series, videojuegos);
contarEntregados(series, videojuegos);
