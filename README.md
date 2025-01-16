# strength_training_app
an app that writes weightlifting programs based on your strength training goals

## To Run Locally
run the following commands from the root directory of dial-in:

* Install pipenv:
  ```
  python3 -m pip install --user pipenv
  ```
* Run the command:
  ```
  pipenv install --dev
  ```
  
* Start pipenv shell:
  ```
  pipenv shell

* Migrate database:
  ```
  python manage.py migrate 
  ```

* Start the dev server:
  ```
  python manage.py runserver
  ```

* Django Admin:
  ```
  http://127.0.0.1:8000/admin/
  ```
