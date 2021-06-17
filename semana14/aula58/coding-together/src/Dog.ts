export class Dog {

    //atributos do cachorro
    name: string;
    weight: number;

    //parâmetros do construtor
    constructor(
        name: string, 
        weight: number){

            //quero apontar que o atributo da classe = parametro do construtor
            this.name = name;
            this.weight = weight;
    }


}

export type typeDog ={
    name: string;
    weight: number;
}

const cachorro1: typeDog = {name: "rex", weight: 20}
const cachorro2: typeDog = {name: "scooby", weight: 20}
const minhaData = new Date()

const classeCachorro1: Dog = new Dog("rex", 20);

console.log(cachorro1)
console.log(classeCachorro1)