 module.exports.handler = (event, context, callback) => {
    
    const user = JSON.parse(event.requestContext.authorizer.user); // User is authorized 
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify({
        users: [
          {
            id: 1,
           firstname:'Saran',
           lastnmae:'Doniparthi',
           fullname:'Saran Doniparthi'
          },
        ],
      }),
    };
  
    callback(null, response);
  };
  