#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Which of the following is a valid type annotation for a variable in TypeScript?",
        choices: ["a) let num: integer;", "b) let num: number;", "c) let num: int;", "d) let num: float;"]
    },
    {
        name: "question_2",
        type: "list",
        message: " How do you make a property optional in a TypeScript interface?",
        choices: ["a) property optional", "b) property?", "c) optional property", "d) ?property"]
    },
    {
        name: "question_3",
        type: "list",
        message: "How do you declare a variable with a specific type in TypeScript?",
        choices: ["a) let variable: type;", "b) var variable: type;", "c) declare variable: type;", "d) type variable: let;"]
    },
    {
        name: "question_4",
        type: "list",
        message: "How do you compile a TypeScript file named app.ts?",
        choices: ["a) tsc app.ts", "b) compile app.ts", "c) typescript app.ts", "d) build app.ts"]
    },
    {
        name: "question_5",
        type: "list",
        message: "What is the correct syntax to define an interface in TypeScript?",
        choices: ["a) interface Name { }", "b) define interface Name { }", "c) declare interface Name { }", "d) type interface Name { }"]
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "b) let num: number;":
        console.log("1. Correct");
        score++;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "b) property?":
        console.log("2. Correct");
        score++;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "a) let variable: type;":
        console.log("3. Correct");
        score++;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case "a) tsc app.ts":
        console.log("4. Correct");
        score++;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "a) interface Name { }":
        console.log("5. Correct");
        score++;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
