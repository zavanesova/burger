CREATE DATABASE burger;
USE burger;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    burger_eaten BOOLEAN,
    PRIMARY KEY (id)
)