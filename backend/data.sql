DROP DATABASE IF EXISTS Pickout;

CREATE DATABASE Pickout;

\c Pickout;

DROP TABLE IF EXISTS users, signature_meal, pair_meal, purchases;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    email TEXT NOT NULL,
    address TEXT,
    created_on TIMESTAMP 
);

CREATE TABLE signature_meal (
    id serial PRIMARY KEY,
    price INTEGER NOT NULL
);

CREATE TABLE pair_meal (
    id serial PRIMARY KEY,
    price INTEGER NOT NULL
);

CREATE TABLE purchases (
    id serial PRIMARY KEY,
    user_id INTEGER 
        REFERENCES users ON DELETE CASCADE,
    signature_meal INTEGER 
        REFERENCES signature_meal ON DELETE CASCADE,
    pair_meal INTEGER 
        REFERENCES pair_meal ON DELETE CASCADE,
    purchased_on TIMESTAMP 
);

INSERT INTO users (username, password, first_name, last_name, email, address) 
VALUES ('Someone', 'yolobolo', 'dexter', 'wexter', 'dexter@wexter.com', '1227 Dog st. #445, Los Angeles, CA 90068');

INSERT INTO signature_meal (price) VALUES (49.99);

INSERT INTO pair_meal (price) VALUES (79.99);