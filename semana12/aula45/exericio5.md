-- exercicio a
CREATE TABLE Filmes (
id varchar(255) primary key,
nome varchar(255) unique not null,
sinopse text not null,
data_lançamento date not null,
avaliação int not null
);

INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliação)
values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/06/01",
7
);

-- exercicios b, c, d, e

INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliação)
values(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
),(
"003",
"Dona flor e seus dois maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
),(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. 
O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
),(
"005",
"Happy Feet - O Pinguim",
"Entre os pinguins imperador você apenas é alguém se souber cantar. Isto causa grande preocupação a Mano, 
considerado o pior cantor do mundo e também um grande sapateador. Norma Jean, sua mãe, gosta do sapateado de Mano mas Memphis, 
seu pai, acha que isto não é coisa de pinguim. Além disto seus pais sabem que caso Mano não encontre sua canção do coração ele talvez nunca encontre o verdadeiro amor.",
"2006-11-24",
8
);