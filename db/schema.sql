DROP DATABASE IF EXISTS beer_db;
CREATE DATABASE beer_db;
CREATE TABLE `beer`.`beer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `pic` TEXT NULL,
  `price` VARCHAR(45) NULL,
    PRIMARY KEY (`id`));


CREATE TABLE `user_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(225) NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `username` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`id`));