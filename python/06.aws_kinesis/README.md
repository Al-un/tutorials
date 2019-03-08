Doing a simple survey pages:

- multiple surveys
- each survey has multiple options
- user can only vote for active surveys

Testing:

- Django model understanding
- Templating
- DjangoRestFramework: API-ing and Routing

local run
```sh
DATABASE_URL='postgres://padawan:padawan@localhost:5432/learn_django' python3 manage.py runserver
```

deploy:
```sh
# For first deploy to set langauge
heroku buildpacks:set heroku/python
# deploy
git subtree push --prefix python/06.aws_kinesis/ heroku-aws-kinesis master
```

- _No default language could be detected for this app_:
    - https://stackoverflow.com/questions/50763962/heroku-and-django-no-default-language-could-be-detected-for-this-app
- _App not compatible with buildpack: https://buildpack-registry.s3.amazonaws.com/buildpacks/heroku/python.tgz_:
    - https://stackoverflow.com/questions/46109465/app-not-compatible-with-buildpack-heroku