class Carro {
    constructor(marcadoCarro, modeloDoCarro, corDoCarro) {
        this.marca = marcadoCarro
        this.modelo = modeloDoCarro
        this.cor = corDoCarro

    }
    acelerar() {
        return "acelerou"
    }

    freiar() {
        return "freiou"
    }

}
const carro1 = new Carro("volkswagem", "gol", "prata")
console.log(carro1.acelerar())
console.log(carro1.freiar())

const carro2 = new Carro("jeep", "renegade", "vermelho")
console.log(carro2.acelerar())
console.log(carro2.freiar())


