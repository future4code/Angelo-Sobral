SET SQL_SAFE_UPDATES = 0;
### exercicio 1
alter table Actor
add type varchar(255) default "NotDirector";

-- letra a
-- altera a tablea deletando a coluna com valor salary

-- letra b
-- altera a tabela trocando o noma da coluna gender para sex como varchar de até 6 caracteres

-- letra c
-- vai dar erro, por que a coluna gender não existe mais

-- letra d
alter table Actor
change gender gender varchar(100);

### exercicio 2
-- letra a
update Actor
set name = "Luana Pioavanni", birth_date = "2021-01-01"
where id = 003;

-- letra b
update Actor
set name = "JULIANA PAES"
WHERE name = "Juliana Paes";

update Actor
set name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- letra c
update Actor
set 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
where id = "005";

-- letra d
-- não dá erro, porém a resposta é que nenhuma linha foi alterada
update Actor
set name = "007"
where id = "009";

### exercicio 3
-- letra a 
delete from Actor
where name = "Fernanda Montenegro";

-- letra b
delete from Actor
where 
salary > 1000000 and 
gender = "male";

### exercicio 4
-- letra a
select max(salary) from Actor;

-- letra b
select min(salary) from Actor
where gender = "female";

-- letra c
select count(*) from Actor
where gender = "female";

-- letra d
select sum(salary) from Actor;

### exercicio 5
-- letra a
-- seleciona a quantidade total de linha por gênero
select count(*)
from Actor
group by gender;

-- letra b
select id, name
from Actor
order by name desc;

-- letra c
select * from Actor
order by salary;

-- letra d
select * from Actor
order by salary desc
limit 3;

select avg(salary) as "Média Salarial", gender
from Actor
group by gender;

### exercicio 6
-- letra a
alter table Filmes
add playing_limit_date date;

-- letra b
alter table Filmes
change rating rating float;

-- letra c
update Filmes
set playing_limit_date = "2021-07-31"
where id = "005";

update Filmes
set playing_limit_date = "2006-09-30"
where id = "001";

-- letra d
-- não dá erro, porém a resposta é que nenhuma linha foi alterada/afetada
insert into Filmes(id, title, sinopse, release_date, rating)
values(
"006",
"bla bla bla",
"eu que não fumo queria um cigarro, eu que não amor você!",
"2020-08-09",
7.6
);

delete from Filmes
where id = "006";

update Filmes
set sinopse = "testando pra ver o que acontece"
where id = "006";

### exercicio 7
-- letra a
select count(*) from Filmes
where rating > 7.5 and 
playing_limit_date > current_date();

-- letra b
select avg(rating) as "Médida das avaliações" 
from Filmes;

-- letra c
select count(*) as "Filmes em cartaz"
from Filmes
where playing_limit_date > curdate();

-- letra d
select count(*) as "Filmes ainda não lançados"
from Filmes
where release_date > curdate();

-- letra e
select max(rating) from Filmes;

-- letra f
select min(rating) from Filmes;

### exercicio 8
-- letra a
select * from Filmes
order by title;

-- letra b
select * from Filmes
order by title desc
limit 5;

-- letra c
select * from Filmes
order by release_date desc
limit 3;

-- letra d
select * from Filmes
order by rating desc
limit 3;

