CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    );

-- exercicio letra a
/*
float é a forma de representar um número não inteiro numa tabela. ex: 1567.99
varchar é uma variável que aceita todos os caracteres. Dentro dos vai a quantidade de caracetere que pode armazenar na variável.
date é uma forma de representar um valor do formato de data.
primary key é uma chave primaria de valor único na tabela, pode existir mais valores com unique, mas não mais de um primary key.
*/

-- exercicio letra b    
SHOW DATABASES; -- MOSTRa todos schemas/base de dados
SHOW TABLES; -- MOSTRa todas as tabelas 

-- exercicio letra c
DESCRIBE Actor; -- mostra os detalhes/estruturas da tabela
