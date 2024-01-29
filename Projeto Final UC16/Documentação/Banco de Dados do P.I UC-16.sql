create database bordados_mao;
use bordados_mao;

create table roupas (
id_roupa int primary key auto_increment,
nome_roupa varchar (60) not null,
tamanho varchar (5) not null,
preco int (25) not null,
descricao_produto text
);
select*from roupas;


create table cliente (
id_cliente int primary key auto_increment,
nome varchar(60) not null,
email varchar (60) not null,
telefone int(20) not null,
cep int(12) not null,
senha varchar (32) not null,
id_roupa int,
foreign key (id_roupa) references roupas (id_roupa)
);
select*from cliente;
select*from cliente where 'nome email';


create table adim (
nome_adim varchar (60) primary key,
email varchar(60) not null,
cpf int (15) not null,
senha varchar (32) not null,
id_roupa int,
id_cliente int,
foreign key (id_roupa) references roupas (id_roupa),
foreign key (id_cliente) references cliente (id_cliente)
);
select*from adim;

insert into adim (nome_adim, email, cpf, senha) value ('Pollyana Magali', 'pollyanaMoça@gmail.com', '00000000000', '@Pollyana2024');
