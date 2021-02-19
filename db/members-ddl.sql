-- create database:
CREATE DATABASE IF NOT EXISTS membersdb CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;


-- create tables:
USE membersdb; 
CREATE TABLE IF NOT EXISTS `members` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  firstName varchar(100) NOT NULL,
  lastName varchar(100) NOT NULL,
  nationalCode varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

