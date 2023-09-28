create database DBMVC;

use DBMVC;

	#nome
    #poder
    #genero
    #tamanho
    #profissao
    
create table PERSONAGENS(
			PER_ID int primary key auto_increment,
            PER_NOME varchar(50) NOT NULL,
            PER_PODER varchar(20) NOT NULL,
            PER_GENERO char(1) NOT NULL,
            PER_TAMANHO decimal(3,2) NULL,
            PER_PROFISSAO varchar(20) NULL
);personagens

select * from PERSONAGENS;

insert into PERSONAGENS(
            PER_NOME,
            PER_PODER,
            PER_GENERO,
            PER_TAMANHO,
            PER_PROFISSAO
) values ("Ana Julia", "Falar com os animais","F","1.59","Veterinária");

