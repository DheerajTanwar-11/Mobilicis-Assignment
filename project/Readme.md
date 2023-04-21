# Mobilicis Assignment

_This project is result of an assignment given by Mobilicis. In this project i have created a web app with the use of Node.js and React.js. Mobilicis has provided us with sample data in a json file. They have asked us to fetch data according to 5 requirement and show the data in table format in Frontend. All the requirement are listed below:_ -_Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”._ -_Male Users which have phone price greater than 10,000._ -_Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name._ -_Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit._ -_Show the data of top 10 cities which have the highest number of users and their average income._

# About Backend

_For the backend i have used Node.js and for database i have used MongoDB. To fetch data from the server i have created 5 routes named as route1, route2, route3, route4 and route5. Below i have explained all routes:_  
-**route1**: _By route1 we are fetching all the users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”._ -**route2**: _By route2 we are fetching all Male Users which have phone price greater than 10,000._  
-**route3**: _By route3 we are fetching Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name._  
-**route4**: _By route4 we are fetching Users which have a car of brand “BMW” or “Mercedes” or “Audi” and whose email does not include any digit._  
-**route5**: _By route5 we are howing the data of top 10 cities which have the highest number of users and their average income._

# What to do in backend

_To setup backend we have to install some modules and do some changes which are given below:_ -_To start the with backend development first of all make a folder named as backend in project directory and open that folder in terminal and type `npm init` and this command will make some files package.json which will store the information of your project._ -_Next we have to install node modules by typing `npm install` and it will download all the required node-modules._  
-_Now we have to install Express, Mongoose and MongoDb by typing these commands `npm install express`, `npm install mongoose` and `npm install mongodb` respectively.
-\_Now you have to create a account on MongoDB Atlas and then create a new cluster then make a new database in it. Now fill that database with sample data given by mobilicis. Then get the connection string and put it in server.js file to get connect to MongoDB database._

# How to run server.js file

_To run server.js open the directory in which this file is present and type `node server.js` in terminal to start the server._

# About Frontend

_For the frontend i have used React.js. In frontend i have created a navbar with 5 links named as Task1 to Task5. And each task represent the task given by Mobilicis. In each task i have created the Table of 10 columns except task5. In task5 we have to show cities and total users._

# What to do in frontend

_To setup frontend we have to install some modules and do some changes which are given below:_ -_First of all create a folder named as frontend and type command `npx create-react-app app_name` to create a basic react app._ -_Now type `npm install` to install node modules._

# How to run frontend

_To run frontend, just go to the fronend directory and open it in terminal and type `npm start` to launch the react app._

# Images of Project

_Image1_:
![Home page](./project%20images/Homepage.jpg)
_Image2_:
![Task1 Image](./project%20images/Task1.jpg)
_Image3_:
![Task2 Image](./project%20images/Task3.jpg)
_Image4_:
![Task3 Image](./project%20images/task2.jpg)
_Image5_:
![Task4 Image](./project%20images/task4.jpg)
_Image6_:
![Task5 Image](./project%20images/task5.jpg)

# Thankyou for visiting my Project.
