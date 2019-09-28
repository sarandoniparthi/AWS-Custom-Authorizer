const jwt = require('jsonwebtoken');
const users = require('../lib/users');
const JWT_EXPIRATION_TIME = '2m'; // token will expire in 2minutes 

module.exports.handler = async (event, context, callback) => {

  const { username, password } = JSON.parse(event.body); // parsing the event.body consits of username and password
  try {
    const user = users.login(username, password);
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });
    const response = {         // Success response
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Set cors here 
      },
      body: JSON.stringify({

        token                   // Returing the signed token with login user 
      }),
    };
    callback(null, response);
  }
  catch (e) {
    const response = {            // Error response
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: e.message,
      }),
    };
    callback(null, response);

  }

};
