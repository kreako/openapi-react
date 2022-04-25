# OpenAPI and React demo




https://user-images.githubusercontent.com/65113001/165090530-9d9639f3-74b7-48a2-9112-ac61173fbdde.mp4




## Backend

Go to the backend directory :

```
$ cd backend
```

### Installation

Make a virtualenv :

```
$ python3 -m venv env
```

Activate :

```
$ . env/bin/activate
```

Install dependencies :

```
$ pip install -r requirements.txt
```

### Launch

Launch the backend with :

```
$ uvicorn main:app --reload
```

OpenAPI docs (with SwaggerUI) available at : http://127.0.0.1:8000/docs

## Frontend

Go to the frontend directory :

```
$ cd frontend
```

### Installation

Install dependencies :

```
$ npm install
```

### Launch

```
$ npm run dev
```

Frontend is now available at : http://127.0.0.1:3000/

### Refresh backend api

```
$ npm run update-backend
```
