-- exercicio a foir feita uma seleção de todos os valores onde o resultado será nomes que iniciem com A ou J e os salários maior que 300mil
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE"J%") AND salary > 300000;

-- exericio b
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

-- exercicio c
SELECT * FROM Actor WHERE name LIKE "%G%";

-- exercicio d
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;