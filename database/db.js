const mongoose = require('mongoose');


const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://ayanroy786420:dJB2eS492TsZV8Aq@cluster0.tb473.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
         console.log('database Connected successfully...');
    } catch (error) {
        console.error("database connection is failed", error);
        process.exit(1);
    }
}
module.exports = connectDb;
