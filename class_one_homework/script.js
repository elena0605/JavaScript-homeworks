// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.
//
let taxRate = 5 / 100;
let numberOfPhones = 30;
let priceOfPhone = 119.95;
let priceWithTax = taxRate * priceOfPhone + priceOfPhone;
let priceOfPhones = numberOfPhones * priceWithTax;
console.log(
	`The price of 30 phones with tax rate of 5% is ${priceOfPhones} dollars`
);
