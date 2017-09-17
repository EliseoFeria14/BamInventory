DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

use bamazon_db;

CREATE TABLE products(
	item_id INT(12) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(12),
	PRIMARY KEY (item_id)
);

INSERT into products(product_name,department_name,price,stock_quantity)

VALUES
	("bananas", "produce", 1.25,25),
	("men's shirt", "clothing", 9.00, 30),
	("tablet", "electronics", 70.99, 25),
	(),
	(),
	(),
	(),
	(),
	(),
	(),
	(),
	(),
	();