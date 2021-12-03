//importing class
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

class AddressBook
{
    contactBook = new Array();
    insert(contactBook)
    {
        //Add data to contact
        let contact = new ContactDetails();
        //User input
        try
        {
            contact.firstName = prompt("Enter First Name : ");
            contact.lastName = prompt("Enter Last Name : ");
            contact.address = prompt("Enter Address : ");
            contact.city = prompt("Enter City Name : ");
            contact.state = prompt("Enter State Name : ");
            contact.zip = prompt("Enter Zip : ");
            contact.phoneNumber = prompt("Enter Phone Number : ");
            contact.emailId = prompt("Enter Email Id : ");
            contactBook.push(contact);

            return contactBook;

        }
        catch(e)
        {
            console.error(e);
        }
    }
            
}
module.exports = AddressBook;