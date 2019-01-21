# First Rails application

## Tutorial

https://guides.rubyonrails.org/getting_started.html

## Deployment

Deployed on Heroku: https://first-rails-plop.herokuapp.com/articles

Based on tutorial: https://devcenter.heroku.com/articles/getting-started-with-rails5

To deploy a subfolder: 
```
# At repository root level:
git remote add heroku https://git.heroku.com/{app name}.git

git subtree push --prefix 2.first_rails heroku master
```
source: https://stackoverflow.com/a/10648623/4906586