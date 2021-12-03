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
        let flag = false;
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

            if(contactBook.length < 0) 
            {
                contactBook.push(contact);
            } 
            else if (contactBook.length >= 0) 
            {
                contactBook.forEach(element => {
                    if( (element.firstName === contact.firstName ) == true ) 
                    {
                        flag = true;
                        return;
                    }
                });
                if( flag == true ) 
                {
                    console.log();
                    console.log("Duplicate Entry is found");
                } 
                else 
                {
                    contactBook.push(contact);
                }
            }  
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
     //This methhod for delete contact
     DeleteContact(contactBook)
     {
        let fName = prompt("Enter First Name of contact : ");
        contactBook.forEach(element => {
            if ((element.firstName === fName) ==true)
            {
                let index = contactBook.indexOf(fName);
                contactBook.splice(index, 1);
                console.log("Contact is deleted");
            } 
            else
            {
                console.log("No contact present");
            }
        });
        return contactBook;    
     } 
     //This function for search contact by city or state name
     SearchContactByCityOrState(contactBook) 
     {
        console.log("1: search by City");
        console.log("2: search by State");
        let choice = parseInt(prompt("Enter your choice : "));

        switch (choice) 
        {
            case 1:
                let city = prompt("Enter the City you want to search the person for : ");
                contactBook.forEach(element => {
                    if (element.city == city) 
                    {
                        console.log(element);
                    }
                });
                break;
            case 2:
                let state = prompt("Enter the State you want to search the person for : ");
                contactBook.forEach(element => {
                    if (element.state == state) 
                    {
                        console.log(element);
                    }
                });
                break;
            default:
                console.log("Invalid Input");
                break;
        }
    }        
}
module.exports = AddressBook;