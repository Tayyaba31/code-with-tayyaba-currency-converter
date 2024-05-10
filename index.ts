#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold(" \n welcome to `codewithtayyaba` currency converter \n"));

//Define the list of currencies and their exchange rate
let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
    //YOU CAN ADD MORE CURRIENCES AND THEIR EXCHANGE RATES
}
// PROMPT TE USER TO SELECT CURRENCY TO CONVERT FROM AND TO
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message:"select the currency to convert from:",
        choices:["USD", "EUR", "JYP", "CAD", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message:"select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message:"Enter the amount to convert:",

    }
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount 

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount 
console.log( `Converted Amount =${converted_amount}`);

