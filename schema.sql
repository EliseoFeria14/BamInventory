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
	("apples", "produce",1.50, 60),
	("women's jeans", "clothing",10.89,40),
	("earbuds", "electronics", 9.99, 49),
	("onions", "produce", 0.89, 40),
	("boy's jacket", "clothing", 7.50, 40),
	("girl's shirt", "clothing", 6.99, 30),
	("smart phone", "electronics", 150.50, 25),
	("shampoo", "grooming", 5.55, 40),
	("toothpaste", "grooming", 3.89, 30),
	("toothbrush", "grooming", 1.99, 40);

SELECT * From products