const request = require('request');
const users = process.argv.slice(2);

function printMessage(username, badgeCount, points){
  const message = `The user ${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
};  

function getProfile(username){
  request(`https://teamtreehouse.com/${username}.json`, function (error, response, body) {
      try{    
        const profile = JSON.parse(body); 
        printMessage(username, profile.badges.length, profile.points.JavaScript)
      }
      catch(error){
        // Server side error 
        if(response.statusCode >= 500){
          console.error(`A server side error has occured. Status Code of ${response.statusCode}.`)
        }
        // Anything but a server side
        else{ 
          console.error(`An error has occured. The username ${username} does not exsist. Please try again.`);
        }
      }
  });
};

users.forEach(getProfile);


