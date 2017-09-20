var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Zorros!1",
	database: "bamazon_db"
});

//connection to mysql db
connection.connect(function(err){
	if (err) throw err;

	productDisplay();
});
//var productId;
//initial showing of inventory
function productDisplay (){
	connection.query("SELECT item_id, product_name, price FROM products"
		,function(err, res){
			if (err) throw err;
			//console.log(res);
			console.log("item_id | price | product_name");
			for (var i = 0; i < res.length; i++){
				console.log(res[i].item_id + "  |" + res[i].price +"  |" + res[i].product_name);
			};
			productPrompt()
			//connection.end();
		});
};

//inquirer to get product client wants to buy
function productPrompt(){
	inquirer.prompt([
	{
		name: "product",
		type: "input",
		message: "Which product would you like to purchase?\n Enter item_id:"
	},
	{
		name: "quantity",
		type: "input",
		message: "What is the quantity of the product that you want to purchase?"
	}]).then(function(answer){
		var productId = answer.product;
		var quantity = answer.quantity;
		console.log("You chose item_id: "+ productId);
		console.log("Product quantity: " + quantity);
		clientConfirm(productId, quantity);
	})
};

//inquirer to confirm if client wants to buy
function clientConfirm (productId, quantity) {
	//console.log("product id: "+productId+"\nquantity: ",quantity);

	var productId = productId;
	var quantity = quantity;

	inquirer.prompt(
	{
		name: "confirm",
		type: "list",
		message: "Are you sure of item_id and quantity ordered?",
		choices:["yes", "no"] 
	}).then(function(ans){
		var confirm = ans.confirm;

		
		if(confirm == "yes"){
			//console.log("productId: ",productId,"\nquantity: ",quantity)
			console.log("Order Placed");
			compareQuantity(productId, quantity);

		}else if(confirm == "no"){
			console.log("Choose product again:\n")
			productPrompt();
		};
	});
};

//function to compare db quantity of product vs quantity client ordered
function compareQuantity (productId, quantity){
	// var productID = productId;
	// var clientQuantity = quantity;

	connection.query("SELECT * FROM products"
			,function(err, res){
				if(err) throw err;
				//console.log(JSON.stringify(res[productId - 1], null, "\t"));
				var dbQuantity = res[productId -1 ]["stock_quantity"];
				//console.log(dbQuantity);
				if(quantity < dbQuantity){
					console.log("There is enough stock to fulfill order");
					priceTotal(res, productId, quantity);
				}else{
					console.log("There is not enough stock to fulfill order");
				}

				connection.end();
			}
		);

};
//function to add the total price of items that client ordered
function priceTotal(res, productId, quantity) {
	//checks to see if the variables carried over
	//console.log(res, null, "\t");
	//console.log(productId)
	//console.log(quantity);
	//console.log(res[productId -1].price, null, "\t");
	var productPrice = res[productId -1].price;
	var orderTotal = parseFloat(productPrice * quantity).toFixed(2);
	console.log("Your total is: $",orderTotal)

}