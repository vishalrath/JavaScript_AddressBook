//importing class
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

class AddressBook
{
    contactBook = new Array();
    //this function for add contacts in array
    AddContact(contactBook)
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

    //This function for find and  edit contacts
    EditContact(contactBook)
    {
        let fName = prompt("Enter First Name of contact : ");
        contactBook.forEach(element => {
            if ((element.firstName === fName) ==true)
            {
                let contact = new ContactDetails();

                contact.firstName = prompt("Enter First Name : ");
                element.firstName = contact.firstName;
                contact.lastName = prompt("Enter Last Name : ");
                element.lastName = contact.lastName;
                contact.address = prompt("Enter Address : ");
                element.address = contact.address;
                contact.city = prompt("Enter City Name : ");
                element.city = contact.city;
                contact.state = prompt("Enter State Name : ");
                element.state = contact.state;
                contact.zip = prompt("Enter Zip : ");
                element.zip = contact.zip;
                contact.phoneNumber = prompt("Enter Phone Number : ");
                element.phoneNumber = contact.phoneNumber;
                contact.emailId = prompt("Enter Email Id : ");
                element.emailId = contact.emailId;
            }
            else
            {
                console.log("No contact present with this name")
            }
        
        });
        return contactBook;
    }

            
}
module.exports = AddressBook;