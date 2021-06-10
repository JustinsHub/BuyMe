DROP DATABASE IF EXISTS Pickout;

CREATE DATABASE Pickout;

\c Pickout;

DROP TABLE IF EXISTS users, user_address, signature_meal, pair_meal, purchases;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    email TEXT NOT NULL,
    created_on TIMESTAMP
);

CREATE TABLE user_address (
    address_id serial PRIMARY KEY,
    street_address TEXT,
    address_number INTEGER,
    city TEXT,
    state TEXT,
    zip_code INTEGER,
    country TEXT
);

CREATE TABLE matching_address (
    PRIMARY KEY (user_id, address_id),
    user_id INTEGER
        REFERENCES users(id) ON DELETE CASCADE,
    address_id INTEGER 
        REFERENCES user_address(address_id) ON DELETE CASCADE
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

-- INSERT INTO users (username, password, first_name, last_name, email) 
-- VALUES ('Someone', 'yolobolo', 'dexter', 'wexter', 'dexter@wexter.com');

INSERT INTO signature_meal (price) VALUES (49.99);

INSERT INTO pair_meal (price) VALUES (79.99);