insert into users
(email, first_name, last_name)
values ($1, '', '')
returning *;