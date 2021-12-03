class ContactDetails
{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    emailId;

    //constructor
    constructor (firstName, lastName, address, city, state, zip, phoneNumber, emailId)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
    }

    //getter setter methods
    get firstName()
    {
        return this.firstName;
    }
    set firstName(firstName)
    {
        this.firstName = firstName;
    }

    get lastName()
    {
        return this.lastName;
    }
    set lastName(lastName)
    {
        this.lastName = lastName;
    }

    get address() 
    {
        return this.address;
    }
    set address(address) 
    {
        this.address = address;
    }

    get city() 
    {
        return this.city;
    }
    set city(city) 
    {
        this.city = city;
    }

    get state() 
    {
        return this.state;
    }
    set state(state) 
    {
        this.state = state;
    }

    get zip() 
    {
        return this.zip;
    }
    set zip(zip) 
    {
        this.zip = zip;
    }

    get phoneNumber() 
    {
        return this.phoneNumber;
    }
    set phoneNumber(phoneNumber) 
    {
        this.phoneNumber = phoneNumber;
    }

    get emailId() 
    {
        return this.emailId;
    }
    set emailId(emailId) 
    {
        this.email = emailId;
    }
    toString() 
    {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city +
                                ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.emailId;
    }
}
module.exports = ContactDetails;