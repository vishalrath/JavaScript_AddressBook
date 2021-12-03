const AddressBook = require("./AddressBook.js");
const prompt =require('prompt-sync')();

let addressBook = new AddressBook();
let contactBook = new Array();
flag = true;

while(flag)
{
    console.log(" Select your option ")
    console.log();
    console.log(" 1 : Add Contact \n 2 : Display Contact \n 0 : Exit ");
    let choice = parseInt(prompt("Enter your Choice : "));

    switch(choice)
    {
        case 1:
            contactBook = addressBook.insert(contactBook);
            break;
        case 2:
            console.log(contactBook.toString());
            break;
        case 0:
            flag = false;
            break;
        default:
            console.log("Invalid Input");
            flag = false;
            break;   
        
    }
    
}