# INST377NutritionFacts
Our group project aims to help users with groccery shopping! Grocery shopping can be a daunting experience for shoppers due to the overwhelming number of products to choose from. This especially applies to people who want to be more conscious about the products they purchase whether it be for nutritional reasons, health reasons, political reasons, etc. The purpose of our website is to aid customers when it comes to making informed decisions about their groceries!



Developer Manual: 

**How to install your application and all dependencies**: 
  You install all the dependencies for the application by cloning the respository then navigating to your project     directory, where you will install the dependencies by typing "npm install" into the terminal. 
  
**How to run your application on a server**: 
  You will run your application on a server by starting the server by typing in "node server.js" and "node index.js". 
  You will then open your brownser and navigate to localhost:3000 in order to run the application. 
  
**How to run any tests you have written for your software**: 
  There are currently no tests scripts that are defined in the package.json file. In order to incorporate a test, you 
  can implement the following into the package.json file. "scripts" : {
                                                             "test": "echo\ "Error: no test specified\" && exit 1"
                                                             } 
                                                             
**The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do**: 
  GET/customers is an API endpoint that fetches a list of customers and responds with a message indicating the customers   endpoint. The POST/ submit API endpooint submits a contact form with an email and issue that responds with a JSON     
  object that indicates a success or failure of the data insertion. The GET/superfood API endpoint fetches data about 
  superfoods from the database and responds with an array of data regarding the superfood. 
  
**A clear set of expectations around known bugs and a road-map for future development.**: 
  Known bugs include issues regarding form submission errors. This bug may develop if the server is not running or if   
  there any sort of network issues. The roadmap for future development includes implementing more endpoints that allow 
  for further updating and deleting issues. Along with this we will develop and improve error handling that will allow 
  the user to obtain a more detailed feedback regarding the errors. Finally, we plan to optimize performance by reducing 
  load times and improving database queries. 
