-- exercicio a
SELECT * FROM Filmes WHERE nome LIKE "%vida%";
-- exercicio b
SELECT * FROM Filmes WHERE nome LIKE "%mãe%" OR sinopse LIKE "%dona%";
-- exercicio c
SELECT * FROM Filmes WHERE data_lançamento < "2021-05-24";
-- exercicio d
SELECT * FROM Filmes WHERE data_lançamento < "2021-05-24" AND (nome LIKE "%Happy%" OR sinopse LIKE "%flor%") AND avaliação > 7;