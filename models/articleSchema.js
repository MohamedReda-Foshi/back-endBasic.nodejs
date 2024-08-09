const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the Customer)
const customerSchema = new Schema({
    firstName:"String",
    lastName:"String",
    number:"String",
    age:"String",
    email:"String",
    Gender:"String",
    Country:"String",
},{ timestamps: true });
 
 
// Create a model based on that schema
const Customer = mongoose.model("Customer", customerSchema);
 
 
// export the model
module.exports = Customer;