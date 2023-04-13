create table users( 
  id int not null auto_increment primary key,
  email varchar(30) unique,
  firstname varchar(20),
  lastname varchar(20),
  password text,
  created_at datetime default now()
);



create table events(
  id text not null primary key,
  user_id int,
  name text,
  date date, 
  foreign key(user_id) references users(id) 
);
