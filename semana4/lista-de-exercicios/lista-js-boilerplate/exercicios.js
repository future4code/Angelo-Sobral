//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui

  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  // implemente sua lógica aqui
  let numbersPair = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numbersPair.push(array[i] * array[i]);
    }
  }
  return numbersPair;
}

//Exercício 3

function retornaNumerosPares(array) {
  // implemente sua lógica aqui
  let newPair = [];
  array.forEach((num) => {
    if (num % 2 === 0) {
      newPair.push(num);
    }
  });
  return newPair;
}

//Exercício 4

function retornaMaiorNumero(array) {
  // implemente sua lógica aqui
  let biggerThan = Math.max(...array);

  return biggerThan;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  // implemente sua lógica aqui
  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  // implemente sua lógica aqui
  let respostas = [false, false, true, true, true];

  return respostas;
}

//Exercício 7

function retornaNNumerosPares(n) {
  // implemente sua lógica aqui
  let newPair = [];
  for (i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      newPair.push(i);
    }
  }

  return newPair;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b && b !== c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  // implemente sua lógica aqui
  let maiorNumero = Math.max(num1, num2);
  let menorNumero = Math.min(num1, num2);

  let maiorDivisivelporMenor = !(maiorNumero % menorNumero);

  let diferenca = Math.abs(maiorNumero - menorNumero);

  let newObject = {
    maiorNumero: maiorNumero,
    maiorDivisivelporMenor: maiorDivisivelporMenor,
    diferenca: diferenca,
  };

  return newObject;
}

// Exercício 10

function segundoMaiorEMenor(array) {
  // implemente sua lógica aqui
  let novoArray = [];
  let maiorNumero = Math.max.apply(null, array);
  let menorNumero = Math.min.apply(null, array);

  for (i = 0; i < array.length; i++) {
    if (array[i] === maiorNumero) {
      array.splice(i, 1);
      maiorNumero = Math.max.apply(null, array);
    }
    if (array[i] === menorNumero) {
      array.splice(i, 1);
      menorNumero = Math.min.apply(null, array);
    }
  }

  novoArray.push(maiorNumero, menorNumero);

  return novoArray;
}

//Exercício 11

function ordenaArray(array) {
  // implemente sua lógica aqui
  let novoArray = [];

  const totalArray = array.length;

  while (novoArray.length !== totalArray) {
    array.forEach((item, index) => {
      if (item === Math.min.apply(null, array)) {
        novoArray.push(item);
        array.splice(index, 1);
      }
    });
  }

  return novoArray;
}

// Exercício 12

function filmeFavorito() {
  // implemente sua lógica aqui
  let filme = "O Diabo Veste Prada";
  let ano = 2006;
  let diretor = "David Frankel";
  let elenco = [
    "Meryl Streep",
    "Anne Hathaway",
    "Emily Blunt",
    "Stanley Tucci",
  ];
  let filmeFavorito = {
    nome: filme,
    ano: ano,
    diretor: diretor,
    atores: elenco,
  };

  return filmeFavorito;
}

// Exercício 13

function imprimeChamada() {
  // implemente sua lógica aqui
  let filme = "O Diabo Veste Prada";
  let ano = 2006;
  let diretor = "David Frankel";
  let elenco = [
    "Meryl Streep",
    "Anne Hathaway",
    "Emily Blunt",
    "Stanley Tucci",
  ];
  let filmeFavorito = {
    nome: filme,
    ano: ano,
    diretor: diretor,
    atores: elenco,
  };

  return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
  let newObject = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };

  return newObject;
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
  const newObject = {
    nome: "ANÔNIMO",
    idade: 25,
    email: "astrodev@future4.com.br",
    endereco: "Rua do Futuro, 4",
  };

  const object = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@future4.com.br",
    endereco: "Rua do Futuro, 4",
  };

  return newObject;
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
  let adultos = arrayDePessoas.filter((item) => {
    if (item.idade >= 20) {
      return true;
    }
  });
  return adultos;
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
  let menorIdade = arrayDePessoas.filter((item) => {
    if (item.idade < 20) {
      return true;
    }
  });
  return menorIdade;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui

  let resArray = array.map((item) => {
    return item * 2;
  });
  // for (i of array) {
  //    let res = i*2
  //    resArray.push(res)
  // }

  return resArray;
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  let resArray = array.map((item) => {
    return `${item * 2}`
  })

  return resArray
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
  let resArray = array.map((item) => {
    if(item % 2 === 0) {
       return `${item} é par`
    } else { 
       return `${item} é ímpar`
    }
  })
  
  return resArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
  // implemente sua lógica aqui
  let retornaPessoasAutorizadas = pessoas.filter((item) => {
   if (item.idade > 14 && item.idade < 60 && item.altura >= 1.5) {
      return true
   }
  })
  
  return retornaPessoasAutorizadas
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  // implemente sua lógica aqui
  let retornaPessoasNaoAutorizadas = pessoas.filter((item) => {
   if (!(item.idade > 14 && item.idade < 60 && item.altura >= 1.5)) {
      return true
   }
  })
  
  return retornaPessoasNaoAutorizadas
}

//Exercício 19

const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "04/11/2019",
  },
];

function retornaEmailConsulta() {
  // implemente sua lógica aqui
  
  let retornaEmailConsulta = consultas.map((item => {
      if (!item.cancelada && item.genero === 'masculino') {
         return `Olá, Sr. ${item.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${item.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
      }
            
      if (item.cancelada && item.genero === 'masculino') {
         return `Olá, Sr. ${item.nome}. Infelizmente sua consulta marcada para o dia ${item.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      }

      if (!item.cancelada && item.genero === 'feminino') {
         return `Olá, Sra. ${item.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${item.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
      }

      if (item.cancelada && item.genero === 'feminino') {
         return `Olá, Sra. ${item.nome}. Infelizmente sua consulta marcada para o dia ${item.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      }
  }))

  return retornaEmailConsulta
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
   contas.forEach(item => {
      item.saldoTotal -= item.compras.reduce((accum, curr) => accum + curr, 0)
   })
   
   return contas
}
