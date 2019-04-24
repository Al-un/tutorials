# React in Django

To learn about how to integrate SPA into Django. In this case, React is used but
it could have beem Vue.js or Angular

## Getting started

Django project can run after or before React build. pipenv recommended

```sh
# build react app
cd frontend-react
npm run deploy:local

# move to django project level
cd ..
# Just in case
python manage.py migrate
# launch django project
python manage.py runserver
```

Open <http://localhost:8000>

## Taken steps

Environment is assumed to be ready: `pyenv`, `pipenv`, `npm` or `yarn`...

- Create a django project
- Install django inside the virtual environment if required
- `python manage.py createsuperuser`
- Create a `todos` app and `api` app
- Create the `Todo` model
- `pipenv install djangorestframework`
- `python manage.py makemigrations` and `python manage.py migrate`
- create Todo serializers, viewsets and add it to `api` urls
- create a TypeScript ready React app
- `npm install react-router-dom @types/react-router-dom`
- Set up routings, pages, containers and components
- Set up Redux
- Set up Thunk
- Add react-redux and @types/react-redux
- Add [CORS](https://github.com/OttoYiu/django-cors-headers) configuration for Django 

## React

- Routing with TypeScript: just use `tsx` file -\_-
- Root path is always an active `NavLink`: <https://stackoverflow.com/a/47879907/4906586>
- Thunk+TypeScript: <https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405>
- Additional scripts were required: build, copy asset to django static folders and copy index.html
- PUBLIC_URL to set appropriate url for static resources: https://facebook.github.io/create-react-app/docs/advanced-configuration

## Django

- Static files
  - define `STATICFILES_DIRS` **before** `STATIC_ROOT` / `STATIC_URL`
  - `python manage.py collecstatic --clear`: <https://docs.djangoproject.com/en/2.2/ref/contrib/staticfiles/#collectstatic>
  - Assign specific folder name with a tuple `(folderName, folderPath)` in `STATICFILES_DIRS`:
    https://docs.djangoproject.com/en/2.2/ref/settings/#prefixes-optional
