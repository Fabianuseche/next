create table users( 
  id int not null auto_increment primary key,
  email varchar(30) unique,
  firstname varchar(20),
  lastname varchar(20),
  password text,
  created_at datetime default now()
);



create table users( 
  id int not null auto_increment primary key,
  email varchar(30) unique,
  firstname varchar(20),
  lastname varchar(20),
  password text,
  created_at datetime default now()
);



create table events (
  id varchar(20) not null primary key,
  user_id int,
  name text,
  date date, 
  lugar varchar(20),
  hora time,
  foreign key(user_id) references users(id) 
);
