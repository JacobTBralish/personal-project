CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL
    ,username VARCHAR(30) NOT NULL UNIQUE
    ,password TEXT NOT NULL
    ,profilePic TEXT
    ,first_name VARCHAR(18) NOT NULL
    ,last_name VARCHAR(25) NOT NULL
    ,email VARCHAR(45) NOT NULL UNIQUE
    ,DOB DATE
);


CREATE TABLE campsites (
    id SERIAL PRIMARY KEY NOT NULL
    ,campsite_name VARCHAR(30)
    ,campsite_pic TEXT NOT NULL
    ,hours_of_operation INTEGER
    ,state CHAR(2) NOT NULL
    ,city VARCHAR(25) NOT NULL
    ,zip INTEGER NOT NULL
    ,longitude DECIMAL NOT NULL
    ,latitude DECIMAL NOT NULL
    ,author_id INTEGER REFERENCES users(id) NOT NULL
);


CREATE TABLE suggested_items (
    id SERIAL PRIMARY KEY NOT NULL
    ,campsite_id INTEGER references campsites(id) NOT NULL
    ,content text
)

CREATE TABLE visited (
    campsite_id INTEGER references campsites(id) NOT NULL
    ,users_id INTEGER references users(id) NOT NULL
)



