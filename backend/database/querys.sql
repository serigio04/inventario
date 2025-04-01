create database Inventario;

create table Usuarios ( 
	id int primary key auto_increment,
	nombre varchar(50) not null,
    apellido varchar(50) not null, 
    email varchar(100) not null unique,
    passwrd varchar(75) not null,
    rol varchar(50) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
    );
