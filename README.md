## Sererless Framework

https://serverless.com/ 

## steps for creating the aws lambda functions using the serverless framework

npm install -g serverless

serverless create --template aws-nodejs --name serverless-project

serverless deploy

will generate endpoints for post and get 

![image](https://user-images.githubusercontent.com/26525621/65815992-25a05a80-e214-11e9-99bd-fb3047d20241.png)

## This function is a custom authorizer which will generate jsonwebtoekns for login 

First step in login we will check whether the user exist in the db it exist we will generate the json token 

![image](https://user-images.githubusercontent.com/26525621/65815954-8bd8ad80-e213-11e9-9dc5-c88288485f6d.png)

By using generated token we will verify and provide the responses 

![image](https://user-images.githubusercontent.com/26525621/65815974-d35f3980-e213-11e9-95f2-99018f0013ba.png)





