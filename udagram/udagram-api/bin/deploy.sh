

eb use udagram-api-dev 
eb init udagram-api --platform node.js --region  us-east-1

eb setenv DB_PORT=$DB_PORT
eb setenv JWT_SECRET=$JWT_SECRET
eb setenv PORT=$PORT
eb setenv POSTGRES_DB=$POSTGRES_DB
eb setenv POSTGRES_HOST=$POSTGRES_HOST
eb setenv POSTGRES_PASSWORD=$POSTGRES_PASSWORD
eb setenv POSTGRES_USERNAME=$POSTGRES_USERNAME
eb setenv URL=$URL

eb deploy