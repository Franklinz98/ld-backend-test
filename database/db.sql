CREATE DATABASE ludycom_backend;

USE ludycom_backend;

CREATE TABLE users(
    email VARCHAR(50) NOT NULL,
    id INT NOT NULL,
    state VARCHAR(8) DEFAULT 'active' NOT NULL,
    name VARCHAR(50),
    lastname VARCHAR(50),
    birthdate DATE,
    area INT,
    salary DECIMAL(10,2),
    apikey VARCHAR(53),
    PRIMARY KEY (id),
    CONSTRAINT CHK_Id CHECK (id<=9999999),
    CONSTRAINT CHK_Area CHECK (area<=99)
);

CREATE TABLE areas(
    code INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    leader INT NOT NULL,
    state VARCHAR(8) DEFAULT 'active' NOT NULL,
    PRIMARY KEY (code),
    CONSTRAINT CHK_Code CHECK (code<=99),
    CONSTRAINT CHK_Leader CHECK (leader<=9999999),
    CONSTRAINT fk_user FOREIGN KEY (leader) REFERENCES users(Id)
);

ALTER TABLE users
    ADD CONSTRAINT fk_area FOREIGN KEY (area) REFERENCES areas(code)