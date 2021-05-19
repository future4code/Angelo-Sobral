// console.log('Hello, world!')

enum MARCA_DE_CARRO {
    FORD = 'Ford',
    VOLKSWAGEM = 'Volkswagem',
    PEUGEOT = 'Peugeot',
    CITROEN = 'Citroen'
}

type carro = {
    marca: MARCA_DE_CARRO;
    volumeTanque: number;
    temMotorFlex: boolean;
    calcularAutonomia: (combustivel: number) => number 
}

function calcAutonomia (combustivel:number):number {
    return combustivel*15
} 

const mustang:carro = {
    marca: MARCA_DE_CARRO.FORD,
    volumeTanque: 61,
    temMotorFlex: false,
    calcularAutonomia: calcAutonomia
}

const gol:carro = {
    marca: MARCA_DE_CARRO.VOLKSWAGEM,
    volumeTanque: 55,
    temMotorFlex: true,
    calcularAutonomia: calcAutonomia
}

const garagem: carro[] = []

garagem.push(mustang, gol)

// console.log(garagem)

function buscarCarros(frota: carro[], marca?: string) {
    if (marca === undefined) {
        return frota
    }

    return frota.filter( carro => carro.marca === marca)
}

const minhaFrota:carro[] = buscarCarros(garagem)
// console.table(minhaFrota)

const kmGol = gol.calcularAutonomia(gol.volumeTanque)

console.log(kmGol)