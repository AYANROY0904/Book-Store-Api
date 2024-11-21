require("dotenv").config();
const express = require("express")
const bookRoutes = require("./routes/book-routes.js");
const app = express();
//const PORT = process.env.PORT || 4500;
const connectDb = require ("./database/db.js")

//connect database
connectDb();

//middleware
app.use(express.json());

//routes here
app.use("/api/books", bookRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is now running on port ${PORT}`);
//   });
app.listen(5000, () => console.log('Server running on port 5000'));
