#! /usr/bin/env node
import inquirer from 'inquirer';

console.log(`\n Welcome To M Salman word Counter \n`)
let condition = true
while (condition) {
    const userInput: {
        Sentance: string
    } = await inquirer.prompt(
        [
            {
                name: "Sentance",
                type: "input",
                message: "Enter a Sentance for counting Word :",
            }
        ]
    )
    if (userInput.Sentance.length > 0) {


        const words = userInput.Sentance.trim().split(" ")
        words.forEach((word, index) => {
            console.log(index + ": " + word)
        })
        console.log(`\n Your Sentence word count is: ${words.length} \n`)
    } else {
        console.log("\n Enter Sentence for counting word... \n")
    }

    const anotherInput = await inquirer.prompt(
        [
            {
                name: 'AnotherSentence',
                message: "You Would Want to more counting word in your Sentence...",
                type: 'confirm',
                default: "true"
            }
        ]
    )
    condition = anotherInput.AnotherSentence
}