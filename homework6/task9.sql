create table users (
    id serial not null primary key,
    username text not null unique,
    email text not null unique,
    first_name text not null,
    last_name text not null,
    password text not null
)

insert into users (username, email, first_name, last_name, password)
values ('nikito4ka', 'nikito4ka@gmail.com', 'Nikita', 'Plyako', 1234),
       ('ukrustacean', 'ukrustacean@gmail.com', 'Ivan', 'Derevankin', 3222),
       ('glov1ee', 'fndjkxc@gmail.com', 'Igor', 'Lior', 8888),
       ('vegetable', 'ua.ivanreznyk@gmail.com', 'Ivan', 'Reznyk', 6969)