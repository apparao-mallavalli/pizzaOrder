# PizzaChatBot
# pizzaOrder Chat Bot

1. Frontemd technologies used
   HTML,CSS, JavaScript and Bootstrap
2. Backend Technology 
    spring boot with jpa 
3. Database 
   MySql
4. Cloud for backend 
    AWS
5.  Frontend was hosted in github

#  link for the project 
   https://apparao-mallavalli.github.io/pizzaOrder/
# Link for Backend 
   http://pizzaorder-env-3.eba-phvwyknc.ap-south-1.elasticbeanstalk.com/
   
 => URL for post the data into the database 
    http://pizzaorder-env-3.eba-phvwyknc.ap-south-1.elasticbeanstalk.com/pizzaOrders
 => URL for get by id from the database
    http://pizzaorder-env-3.eba-phvwyknc.ap-south-1.elasticbeanstalk.com/pizzaOrders?{id}
  
  
  I created a table with name ,mobile ,email , and pizza information .
  Using fetch api with async and wait , i performed post and get operations asynchronously.

 In the backend ,i used spring boot ,it gives high security .By using JPA repository and rest controllers , 
  i perfomred fetching data and storing data easily .

I used elestic bean stalk for getting virual instannce in aws easily and rds service for the database .
I integrated both database and application in application.properties .
It runs on port number 5000.

