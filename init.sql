CREATE DATABASE navbar1212 COLLATE LATIN1_GENERAL_100_CI_AS_SC_UTF8
GO

USE navbar1212
GO

create table contents
(
    id bigint identity not null,
    content_text varchar(8000),
    created_at datetime2,
    name varchar(255),
    published bit not null,
    updated_at datetime2,
    primary key (id)
)
GO

create table navbars
(
    id bigint identity not null,
    name varchar(255),
    primary key (id)
)
GO

create table navitems
(
    id bigint identity not null,
    link varchar(255),
    linked bit not null,
    name varchar(255),
    parent int not null,
    published bit not null,
    sort int not null,
    navbar_id bigint not null,
    primary key (id)
)
GO

alter table navitems 
    add constraint FKiv15kwgxruk3iheb14dq7sxxf 
    foreign key (navbar_id) 
    references navbars
GO

INSERT INTO navbars
    (name)
VALUES
    ('Үндсэн меню'),
    ('Туслах меню')
GO

INSERT INTO navitems
    (link, linked, name, parent, published, sort, navbar_id)
VALUES
    ('#', 0, 'Статистик', 0, 1, 0, 1),
    ('#', 0, 'Файлын сан', 0, 1, 1, 1),

    ('#', 0, 'Бидний тухай', 0, 1, 0, 2),
    ('#', 0, 'Холбоо барих', 0, 1, 1, 2)
GO

INSERT INTO contents
    (content_text, created_at, name, published, updated_at)
VALUES
    ('Content text here!', GETDATE(), 'Title here 1', 1, GETDATE()),
    ('Content text here!', GETDATE(), 'Title here 2', 1, GETDATE())
GO