create table users( 
  id int not null auto_increment primary key,
  email varchar(30) unique,
  firstname varchar(20),
  lastname varchar(20),
  password text,
  created_at datetime default now()
);

create table reminder(
  id int not null auto_increment primary key,
  message text,
  frecuency ENUM('daily','weekly','monthly','once'),
  week_day text,
  month_day int,
  hour time,
  day date
);

create table meta(
  id int not null auto_increment primary key,
  type ENUM ('task', 'routine'),
  title text not null,
  start_date date,
  end_date date,
  user_id int not null,
  reminder_id int,
  foreign key(user_id) references users(id),
  foreign key(reminder_id) references reminder(id)
);

create table task(
  id int not null auto_increment primary key,
  meta_id int,
  title text,
  status ENUM ('Pending', 'In progress','Done'),
  done_date datetime, 
  foreign key(meta_id) references meta(id) 
);
