# NYT-scraper-react

MERN
Node/Express/MongoDB/ReactJS app called nytreact

 1) Search using query for New York Times API, 
 2) Save articles into Mongo using Mongoose model/schema, 
 3) Display search results and recently searched articles with React and React router.
 
=======================================================================

Initializes at server.js

Dependencies:
    axios
    bluebird
    body-parser
    express
    method-override
    mongoose
    morgan
    react
    react-dom
    react-router
    request
    
 devDependencies:
    babel-core
    babel-loader
    babel-preset-es2015
    babel-preset-react
    json-loader
    webpack
    
Mongo part:
Create a MongoDB database called nytreact.
Using mongoose, then create an Article schema and model
    
Articles should have each of the following fields:
-title (Title of the stored article from nytimes.com)
-date (publish date and time of the article)
-url (URL of the article on nytimes.com)
