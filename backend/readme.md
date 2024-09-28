## Backend Setup Instructions

1. Install dependencies

```sh
(env)$ cd backend
(env)$ pip install -r requirements.txt
```

2. Make migrations and create superuser:

```
(env)$ python manage.py makemigrations
(env)$ python manage.py migrate
(env)$ python manage.py createsuperuser

```

3. For local, Run server (provide IP:PORT in the last if needed)

```
(env)$ python manage.py runserver
```

4. Application admin interface is available at `http://127.0.0.1:8000/admin/`.
