# AWS Kinesis

Functionalities:

- multiple surveys
- each survey has multiple options
- user can only vote for active surveys

## Objectives

- Django model understanding
- Templating
- DjangoRestFramework: API-ing and Routing
- Kinesis: each votes is sent logged
- Lambda processes Kinesis stream
- Log is ultimately stored in Redshift

## Getting started

Running the application requires three environment variables: database url and aws variables:

```sh
DATABASE_URL='postgres://padawan:padawan@localhost:5432/learn_django' AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX python3 manage.py runserver
```

## Deploy on Heroku

https://devcenter.heroku.com/categories/python-support

deploy:
```sh
# First deploy to set language
heroku buildpacks:set heroku/python
# deploy
git subtree push --prefix python/06.aws_kinesis/ heroku-aws-kinesis master
```

**Debug**

- _No default language could be detected for this app_:
    - https://stackoverflow.com/questions/50763962/heroku-and-django-no-default-language-could-be-detected-for-this-app
- _App not compatible with buildpack: 
    - https://buildpack-registry.s3.amazonaws.com/buildpacks/heroku/python.tgz_:
    - https://stackoverflow.com/questions/46109465/app-not-compatible-with-buildpack-heroku
- _No matching distribution found for apturl==0.5.2_:
    - Because of _Installing python-3.6.8_, adding a `runtime.txt` to force use 3.6.7

## Deploy Lamboda

- https://docs.aws.amazon.com/lambda/latest/dg/lambda-python-how-to-create-deployment-package.html#python-package-dependencies
- Installing dependencies in a specific folder:
    - `pip3 install --system --target package/ psycopg2`
    - https://github.com/pypa/pip/issues/3826#issuecomment-232080694
- AWS Lambda does not support standard psycopg2:
    - https://www.linkedin.com/pulse/accessing-postgresql-databases-from-aws-python-lambda-wang
    - https://github.com/alexcasalboni/awslambda-psycopg2
- Zip
- Deploy:
    ```
    aws lambda update-function-code --function-name learn-aws-kinesis --zip-file fileb://my_lambda.zip --profile joyz-perso
    ```