# strength_training_app
An app that writes weightlifting programs based on your strength training goals

## To Run Locally
Run the following commands from the root directory of strength_training_app:

### Backend Setup (Django)

* Install pipenv:
  ```
  python3 -m pip install --user pipenv
  ```

* Install Python dependencies:
  ```
  pipenv install --dev
  ```

* Start pipenv shell:
  ```
  pipenv shell
  ```

* Migrate database:
  ```
  python manage.py migrate
  ```

### Frontend Setup (React)

* Navigate to the frontend directory:
  ```
  cd training_frontend
  ```

* Install Node dependencies:
  ```
  npm install
  ```

* Build the React app:
  ```
  npm run build
  ```

* Return to root directory:
  ```
  cd ..
  ```

* Collect static files:
  ```
  python manage.py collectstatic --noinput
  ```

### Start the Application

* Start the dev server:
  ```
  python manage.py runserver
  ```

* Access the application:
  ```
  http://127.0.0.1:8000/
  ```

* Django Admin:
  ```
  http://127.0.0.1:8000/admin/
  ```

* API Endpoints:
  ```
  http://127.0.0.1:8000/api/programs/
  ```

## Development Workflow

When making changes to the React frontend:
1. Make your changes in `training_frontend/src/`
2. Rebuild the React app: `cd training_frontend && npm run build`
3. Collect static files: `python manage.py collectstatic --noinput`
4. Restart the Django server
