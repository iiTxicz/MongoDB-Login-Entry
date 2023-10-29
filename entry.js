const mongoose = require("mongoose");
const { Schema, model, connect } = require('mongoose');

connect('PUT-MONGODB-URI-HERE', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    // Change Schema name and details if it isn't the same Schema name
    const loginSchema = new Schema({
        username: String,
        password: String
    });

    // Change Schema name and details if it isn't the same Schema name
    const Login = model("Login", loginSchema);

    // Replace this with your own credientials (Will be logged to MONGODB)
    const l = new Login({
        username: 'username-here',
        password: 'password-here'
    });

    await l.save();

    // Include the username for Mongoose to find to log to your console
    const f = await Login.findOne({ username: 'PUT USERNAME HERE THAT YOU WANT TO FIND TO MAKE SURE IT LOGGED' });
    console.log(f);
    
    // Closes the connection to MongoDB when completed with actions
    mongoose.connection.close(); 
    // Exits the Process (Stops the Process)
    process.exit();
}).catch((error) => {
    console.log(error);
});