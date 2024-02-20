CREATE DATABASE perntodo;

-- SERIAL will increase our primary key to ensure uniqness
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);