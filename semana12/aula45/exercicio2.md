-- exercicio a
INSERT INTO Actor(id, name, gender, salary, birth_date)
VALUES (
	"002",
    "Glória Pires",
    "Female",
    1200000,
    "1963-08-23"
);

-- exercicio b entrada duplicada para 002 chave primaria

INSERT INTO Actor(Id, name, gender, salary, birth_date)
VALUES (
	"002",
    "Miguel Falabella",
    "Male",
    600000,
    "1953-02-13"
);

-- exercicio c coluna não encontrada

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- exercicio d campo do nome não tem valor padrão... no caso não foi informado e é mull

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES (
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

-- Exercicio e valor incorreto na coluna da data de nascimento. ta number e o esperado é text 

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES (
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "Female"
);

-- Exercicio f ajustes feitos
