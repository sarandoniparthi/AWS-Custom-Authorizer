const _ = require('lodash');
const jwt = require('jsonwebtoken');
const utils = require('../lib/utils');


module.exports.handler = (event, context, callback) => {
 
  const token = event.authorizationToken;

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = decoded.user;
    const userId = user.username;
    const authorizerContext = { user: JSON.stringify(user) };
    const policyDocument = utils.buildIAMPolicy(userId,"allow", event.methodArn, authorizerContext);
    callback(null, policyDocument);
  } catch (e) {
    console.log(e.message);
    callback('Unauthorized'); // Return a 401 Unauthorized response
  }
};
