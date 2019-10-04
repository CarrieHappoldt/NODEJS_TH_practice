const request = require('request');
const users = process.argv.slice(2);

function printMessage(username, totalPoints, points, sqlpoints){
  const message = `The user ${username} has ${totalPoints} total points and ${points} points in JavaScript and ${sqlpoints} in Databases`;
  console.log(message);
};  

function getProfile(username){
  request(`https://teamtreehouse.com/${username}.json`, function (error, response, body) {
      try{    
        const profile = JSON.parse(body); 
        printMessage(username, profile.points.total, profile.points.JavaScript, profile.points.Databases)
      }
      catch(error){
        // Server side error 
        if(response.statusCode >= 500){
          console.error(`A server side error has occured. Status Code of ${response.statusCode}.`)
        }
        else if(response.statusCode < 500 && response.statusCode >= 400){
          console.error(`An error has occured. The username ${username} does not exsist. Please try again.`);
        }
        else if(response.statusCode < 400 && response.statusCode >= 300){
          console.error(`A error with the ULR has occured. Status Code of ${response.statusCode}.`);
        }
      }
  });
};

users.forEach(getProfile);
