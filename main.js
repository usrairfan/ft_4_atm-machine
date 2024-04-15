#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Doller
let myPin = 2424;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//12345 === 2424
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdrow", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdrow") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        console.log(amountAns.amount);
        // =, -= +=
        myBalance -= amountAns.amount;
        console.log("your remaining balance: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
