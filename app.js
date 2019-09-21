/* 
connect to the API URL
read data
parse the data
print the data
*/
const https = require("https")
//const username = "carriehappoldt" changed to make reusable
function printMessage(username, badgeCount, points){
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

function getProfile(username){
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
        response.on("data", data => {
          body += data.toString();
        });

        response.on("end", () => {
          const profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript)
        });
  });
};
const users = process.argv.slice(2);
//const users = ["carriehappoldt", "chalkers", 'alenaholligan']

// users.forEach(username => {
//   getProfile(username);
// })

users.forEach(getProfile);


/* TO USE RUN node app.js carriehappoldt IN THE TERMINAL*/