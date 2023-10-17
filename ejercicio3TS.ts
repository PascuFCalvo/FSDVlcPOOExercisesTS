class Electrodomestico {
  public precioBase: number;
  public color: string;
  public consumoEnergetico: string;
  public peso: number;

  constructor(
    precioBase: number,
    color: string,
    consumoEnergetico: string,
    peso: number
  ) {
    this.precioBase = precioBase || 0;
    this.color = this.comprobarColor(color) || "blanco";
    this.consumoEnergetico =
      this.comprobarConsumoEnergetico(consumoEnergetico) || "F";
    this.peso = peso || 0;
  }

  getPrecioBase(): void {
    console.log(this.precioBase);
  }
  getColor(): void {
    console.log(this.color);
  }
  getConsumoEnegetico(): void {
    console.log(this.consumoEnergetico);
  }
  getPeso(): void {
    console.log(this.peso);
  }

  comprobarConsumoEnergetico(letra: string) {
    const consumosValidos: string[] = ["A", "B", "C", "D", "E", "F"];

    //esta linea en javascript era con un includes, pero al pasarlo a type me he vuelto loco buscando
    //la alternativa

    if (consumosValidos.indexOf(letra.toUpperCase()) !== -1) {
      return letra;
    }
    return "F";
  }

  comprobarColor(color: string) {
    const coloresValidos: string[] = [
      "blanco",
      "negro",
      "rojo",
      "azul",
      "gris",
    ];
    const normalizedColor = color.toLowerCase();
    
    //igual que arriba

    if (coloresValidos.indexOf(normalizedColor) !== -1) {
      return normalizedColor;
    }
    return "blanco";
  }

  precioFinal(consumo: string, tamano: number) {
    let precioFinal = this.precioBase;

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
    } else if (tamano > 20 && tamano <= 50) {
      precioFinal += 50;
    } else if (tamano > 50 && tamano <= 80) {
      precioFinal += 80;
    } else if (tamano > 80) {
      precioFinal += 100;
    }

    return precioFinal;
  }
}

class Lavadora extends Electrodomestico {
  carga: number;

  constructor(
    precioBase: number,
    color: string,
    consumoEnergetico: string,
    peso: number,
    carga: number
  ) {
    super(precioBase, color, consumoEnergetico, peso);
    this.carga = carga || 5;
  }

  precioFinal() {
    let precioLavadora = super.precioFinal(this.consumoEnergetico, this.peso);
    if (this.carga >= 30) {
      precioLavadora += 50;
    }
    return precioLavadora;
  }
}

class Television extends Electrodomestico {
  resolucion: number;
  is_4k: boolean;

  constructor(
    precioBase: number,
    color: string,
    consumoEnergetico: string,
    peso: number,
    resolucion: number,
    is_4k: boolean
  ) {
    super(precioBase, color, consumoEnergetico, peso);
    this.resolucion = resolucion || 20;
    this.is_4k = is_4k || false;
  }

  precioFinal() {
    let precioTelevision = super.precioFinal(
      this.consumoEnergetico,
      this.peso
    );
    if (this.resolucion > 40) {
      precioTelevision = precioTelevision * 1.3;
    
    } if (this.is_4k) {
      precioTelevision += 50;
    }
    return precioTelevision;
  }
}

class mainApp {
  public electrodomesticos: Electrodomestico[] = [];

  constructor() {
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

    let precioTotal: number = 0;
    let precioTotalLavadoras: number = 0;
    let precioTotalTelevisiones: number = 0;

    this.electrodomesticos.forEach((element) => {
      let precio = element.precioFinal(element.consumoEnergetico, element.peso);
      console.log(element.peso)
      precioTotal = precioTotal + precio;
      if (element instanceof Lavadora) {
        precioTotalLavadoras += precio;
      } else if (element instanceof Television) {
        precioTotalTelevisiones += precio;
      }
    });
    
    console.log("Precio Total: " + precioTotal);
    console.log("Precio Total de Lavadoras: " + precioTotalLavadoras);
    console.log("Precio Total de Televisiones: " + precioTotalTelevisiones);
  }
}

let launchApp = new mainApp();
