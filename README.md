# Treehouse Profile Client
This is a simple node.js project that can retrieve a Treehouse users information, via Treehouse's API. This project is from their Node.js course but I challenged myself to add in a few error handlers (try...catch...). I wanted there to be a more user friendly error message, than the normal overwhelming stack trace. I also changed to a more efficient node module - request. This module made it so I didn't have to .toString() the data buffer from a response.on fetch. Which means I didn't have to use JSON.parse() to convert the string back to an onject. In the end it saved many lines of code and was easier to read. 

I enjoyed this little self set challenge. Below is how to run my project with a username error included.

### How to Run
 1. Clone the repository
 2. `npm install`
 3. `node main.js carriehappoldt, chalkers, carriehappo`
 
Thanks for joining me! Carrie 
