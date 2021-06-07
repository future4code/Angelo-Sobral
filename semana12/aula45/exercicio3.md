SELECT * FROM Actor; -- Ela faz com que se retornem todas as colunas (ou "informações") de todas as linhas (ou "entradas") da nossa tabela. 

SELECT id, salary FROM Actor; -- retorna informações das colunas informadas, no caso id e salary

SELECT id, name FROM Actor WHERE gender="male"; -- retorna informações das colunas informadas buscando onde/where = valor insoformado

-- Exercicio a
SELECT * FROM Actor WHERE gender="female";

-- Exercicio b
SELECT salary FROM Actor WHERE name="Tony Ramos";

-- Exercicio c não trouxe nada, pois não há valor inválido em virtude de todos serem not null
SELECT * FROM Actor WHERE gender="invalid";

-- Exercicio d
SELECT id, name, salary FROM Actor WHERE salary < 500000;

-- Exercicio e a coluna está com nome errado, o correto é name
SELECT id, name FROM Actor WHERE id = "002";
