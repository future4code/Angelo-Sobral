//Exercicio 1
//a) O IDE informa que não é possível atribuir um tipo diferete de string à variável mminhaString
const minhaString: string = "Estou curtindo TS";

//b) O IDE informa que não é possível atribuir um tipo diferete de number à variável meuNumero
const meuNumero: number = 9;

//c) e d)
enum CORES_ARCO_IRIS {
  AZUL = "Azul",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: CORES_ARCO_IRIS;
};
const pessoa1: Pessoa = {
  nome: "Ângelo",
  idade: 34,
  corFavorita: CORES_ARCO_IRIS.AZUL,
};

const pessoa2: Pessoa = {
  nome: "Karine",
  idade: 32,
  corFavorita: CORES_ARCO_IRIS.VERDE,
};

const pessoa3: Pessoa = {
  nome: "Ângela",
  idade: 64,
  corFavorita: CORES_ARCO_IRIS.AMARELO,
};

const pessoa4: Pessoa = {
  nome: "Itana",
  idade: 33,
  corFavorita: CORES_ARCO_IRIS.VIOLETA,
};

//Exercicio 2
//a) A entrada é any(qualquer valor) e saída um objeto com qualquer valor e number
function obterEstatisticas(numeros: number[]): object {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//b)numerosOrdenados tipo array de number; soma tipo number; estatisticas tipo object

//c)
type Amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => object;
};

const amostraDeIdades: Amostra = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas,
};

// console.log(obterEstatisticas(amostraDeIdades.numeros))

//Exercicio 3
type Posts = {
  autor: string;
  texto: string;
};

const posts: Posts[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

//b) As entradas são os parâmetros de qualquer tipo, assim como a saída
function buscarPostsPorAutor(posts: Posts[], autorInformado: string) {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}

// console.log(buscarPostsPorAutor(posts,'Dobby'))

//Exercicio 4 já foi feito logo no início rsrsrs
//a) tsc index.ts
//b) teria que acessar o direotorio e usar o tsc index.ts
//c) sim. podemos usar o comando tsc seguidas vezes com o nome do arquivo a ser tranpilado, ou fazer através de scripts do pkg json

//Desafios
//Exercicio 5

function calc(num1: number, num2: number) {
  const soma = num1 + num2;
  const sub = num1 - num2;
  const mult = num1 * num2;
  const div = num1 / num2;
  const maior = Math.max(num1, num2);

  console.log(
    `A soma dos números é ${soma}`,
    `A subtração dos números é ${sub}`,
    `A multiplicação dos números é ${mult}`,
    `A divisão dos números é ${div}`,
    `O maior número é ${maior}`
  );
}

//Exercicio 6

function idadeHistorica(ano: number, acOUdc?: string) {
  if (ano >= 4000 && acOUdc?.toUpperCase() === "AC") {
    return "Idade pré histórica";
  } else if (
    (ano < 4000 && acOUdc?.toUpperCase() === "AC") ||
    (ano < 476 && acOUdc?.toUpperCase() === "DC")
  ) {
    return "Idade antiga";
  } else if (
    (ano > 475 && acOUdc?.toUpperCase() === "DC") ||
    (ano < 1453 && acOUdc?.toUpperCase() === "DC")
  ) {
    return "Idade média";
  } else if (
    (ano > 1452 && acOUdc?.toUpperCase() === "DC") ||
    (ano < 1789 && acOUdc?.toUpperCase() === "DC")
  ) {
    return "Idade moderna";
  } else if (ano > 1789 && acOUdc?.toUpperCase() === "DC") {
    return "Idade Contemporânea";
  } else if (acOUdc === undefined) {
    if (ano > 0 && ano < 476) {
      return "Idade antiga";
    } else if (ano > 475 && ano < 1453) {
      return "Idade média";
    } else if (ano > 1452 && ano < 1789) {
      return "Idade moderna";
    } else if (ano > 1789) {
      return "Idade Contemporânea";
    }
  } else {
    return "Erro";
  }
}

const imprimeIdade = idadeHistorica(2021);
// console.log(imprimeIdade)

//Exercicio 7
type produtos = {
  nome: string;
  preco: number;
  categoria: string;
  precoComDesconto?: number;
};

const produtos: produtos[] = [
  {
    nome: "Camiseta",
    preco: 20,
    categoria: "verão",
  },
  {
    nome: "Toalha",
    preco: 10,
    categoria: "banho",
  },
  {
    nome: "Calcinha",
    preco: 23,
    categoria: "íntimas",
  },
  {
    nome: "Casaco",
    preco: 8,
    categoria: "inverno",
  },
];

function desconto(preco: number, percentual: number) {
  return (preco * (100 - percentual)) / 100;
}

function precoDesconto(produtos: produtos[]) {
  return produtos.map((produto) => {
    if (produto.categoria === "verão") {
      return {
        ...produto,
        precoComDesconto: desconto(produto.preco, 5),
      };
    }

    if (produto.categoria === "inverno") {
      return {
        ...produto,
        precoComDesconto: desconto(produto.preco, 10),
      };
    }

    if (produto.categoria === "banho") {
      return {
        ...produto,
        precoComDesconto: desconto(produto.preco, 4),
      };
    }

    if (produto.categoria === "íntimas") {
      return {
        ...produto,
        precoComDesconto: desconto(produto.preco, 7),
      };
    }
  });
}

console.table(precoDesconto(produtos));
