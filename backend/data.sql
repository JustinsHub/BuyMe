DROP DATABASE IF EXISTS BuyMe;

CREATE DATABASE BuyMe;

\c BuyMe;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username text UNIQUE NOT NULL,
    password text NOT NULL,
    first_name text,
    last_name text,
    email text NOT NULL,
    address text
);

INSERT INTO users (username, password, first_name, last_name, email, address) 
VALUES ('Someone', 'yolobolo', 'dexter', 'wexter', 'dexter@wexter.com', '1227 Dog st. #445, Los Angeles, CA 90068')