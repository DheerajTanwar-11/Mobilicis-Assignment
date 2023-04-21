// Importing the Express Framework
const express = require("express");
const cors = require("cors");

//Creating instance of express
const app = express();
app.use(express.json());
app.use(cors());

// Connecting to MongoDB Database
const mongoose = require("mongoose");

const MONGODB_URI =
	"mongodb+srv://dheerajtanwar1311:mobilicisassignment@cluster1.bo8qk45.mongodb.net/sample_userdata?retryWrites=true&w=majority";

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error(err);
	});

// Importing Database Model
const User = require("./models/user");

// Defining routes and middleware
// 1. Person having income less than $5 and with car brand BMW or Mercedes
const route1Router = require("./routes/route1");
app.use("/route1", route1Router);
// 2. Male users having phone price greater than 10000
const route2Router = require("./routes/route2");
app.use("/route2", route2Router);
// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
const route3Router = require("./routes/route3");
app.use("/route3", route3Router);
// 4. Users who have carbrand BMW or Mercedes or Audi and have no digits in email
const route4Router = require("./routes/route4");
app.use("/route4", route4Router);
//5. Show the data of top 10 cities which have the highest number of users and their average income.
const route5Router = require("./routes/route5");
app.use("/route5", route5Router);
const PORT = process.env.PORT || 8000; // Define the port number

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
