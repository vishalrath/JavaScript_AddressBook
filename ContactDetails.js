
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
        let firstNamePattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNamePattern.test(firstName))
        {
            this.firstName = firstName;
        }
        else
        {
            throw "First Name is Incorrect";
        }
        
    }

    get lastName()
    {
        return this.lastName;
    }
    set lastName(lastName)
    {
        let lastNamePattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNamePattern.test(firstName))
        {
            this.lastName = lastName;
        }
        else
        {
            throw "Last Name is Incorrect";
        }
        
    }

    get address() 
    {
        return this.address;
    }
    set address(address) 
    {
        let addressPattern = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if ( addressPattern.test(address))
        {
            this.address = address;
        }
        else
        {
            throw "Address is Incorrect!";
        }
        
    }

    get city() 
    {
        return this.city;
    }
    set city(city) 
    {
        let cityRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( cityRegex.test( city ))
        {
            this.city = city;
        }
        else 
        {
            throw "City is Incorrect!";
        }
        
    }

    get state() 
    {
        return this.state;
    }
    set state(state) 
    {
        let stateRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( stateRegex.test( state ))
        {
            this.state = state;
        }
        else 
        {
            throw "State is Incorrect!";
        }
        
    }

    get zip() 
    {
        return this.zip;
    }
    set zip(zip) 
    {
        let zipRegex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if ( zipRegex.test( zip ))
        {
            this.zip = zip;
        }
        else 
        {
            throw "Zip is Incorrect";
        }
    }

    get phoneNumber() 
    {
        return this.phoneNumber;
    }
    set phoneNumber(phoneNumber) 
    {
        let phoneRegex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if ( phoneRegex.test( phoneNumber )) 
        {
            this.phoneNumber = phoneNumber;
        }
        else 
        {
            throw "Phone Number is Incorrect!";
        }
        
    }

    get emailId() 
    {
        return this.emailId;
    }
    set emailId(emailId) 
    {
        let emailRegex = RegExp('^[a-z]{3}[.][a-z]*[@]{1}[bl]{2}[.]{1}[co]{2}[.]{1}[a-z]*$');
        if ( emailRegex.test( email ))
        {
            this.emailId = emailId;
        }
        else 
        {
            throw "Email is Incorrect!";
        }
     
    }

    toString() 
    {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city + ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.emailId;
    }

    
    
}

module.exports = ContactDetails;