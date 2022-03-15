///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce(function(acc, curr) {return acc + curr.price;}, 0);

 console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return ((cartTotal * (1+tax)) - couponValue)
};

const cartTotal = cart.reduce(function(acc, curr) {return acc + curr.price;}, 0);
const finalPrice = calcFinalPrice(cartTotal, 3.45, .06)
console.log(finalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    A model for a Customer would be created using a class.
    It would have the following properties:
    
    name (string) - Most names can be stored as this type, to be able to communicate with them
    email (string) - Emails are string values, to identify and communicate to the customer
    homeAddress (object) - Holds address fields to ship items to 
    username (string) - Can hold special characters, Identify specific user must be unique
    password (string) - Can hold special characters, and provides access to your system
    previousOrders (list[number]) - holds order numbers of previous purchases
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

customer = {
    "name": "Jane Doe",
    "email": "jane.doe@devmountain.com",
    "homeAddress": {
        "street": "111 Heaven Ln",
        "city": "Heaven",
        "state": "Enoch",
        "zip": "11111"
    },
    "username": "jdoe33",
    "password": "encryptedpwd==",
    "previousOrders": [12341243, 123412344, 12412341]
}
console.log(customer)