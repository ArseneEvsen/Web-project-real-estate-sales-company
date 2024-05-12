CREATE DATABASE IF NOT EXISTS housesdb;

USE housesdb;

CREATE TABLE IF NOT EXISTS regions (
    region VARCHAR(255) NOT NULL,
    PRIMARY KEY (region)
);

CREATE TABLE IF NOT EXISTS departments (
    department VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    PRIMARY KEY (department),
    FOREIGN KEY (region) REFERENCES regions(region)
);

CREATE TABLE IF NOT EXISTS cities (
    city VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    PRIMARY KEY (city),
    FOREIGN KEY (department) REFERENCES departments(department)
);

CREATE TABLE IF NOT EXISTS houses (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    price VARCHAR(255) DEFAULT NULL,
    department VARCHAR(255) DEFAULT NULL,
    region VARCHAR(255) DEFAULT NULL,
    surface FLOAT(7,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (city) REFERENCES cities(city)
);
