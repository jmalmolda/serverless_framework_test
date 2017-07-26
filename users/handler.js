'use strict';

module.exports.createUser = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `user created: ${body.id}`,
      input: event
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
