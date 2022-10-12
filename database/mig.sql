

DROP TABLE IF EXISTS hobbies CASCADE;
CREATE TABLE hobbies (
    id serial PRIMARY KEY,
    hobbies varchar(50) NOT NULL,
    descrip text
);

INSERT INTO hobbies (hobbies, descrip) VALUES ('basketball', 'shoot and run down the court');