# Users Api 

> Users Api is an api restful where you can CREATE a new user, READ, UPDATE and DELETE users;

## 🛠️ Technologies and Tools used

#### Back-end
* Node.js
* Express
* Knex
* Postgres
* Dotenv
* Nodemon
* Docker
* Jest

## 💻 Prerequisites

This application uses [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/) to start it, so make sure that both tools are installed correctly on your computer.

## 🚀 Cloning the Project


Open your terminal and type the following commands:
```
git clone git@github.com:davisoaresc/teste_fullstack.git

cd teste_fullstack
```
## 🚀 Starting the Application
With the project cloned on your machine and inside the `teste_fullstack` directory, run the following docker compose command:

```
docker-compose up -d --build
```

#### Testing the application

The back-end of this application has unit tests for the Controllers and Middlewares. **To run them and check test coverage, follow these instructions:**

Navigate to the `server` directory
```
cd backend
```
Install dependencies:
```
npm install
```
Start the tests
```
npm test
```


## API Endpoints
This API has the following endpoints:

| Method | Description |
|---|---|
| `GET - localhost:3001/api/v1/users` | Returns all users registered in the Database. |
| `GET - localhost:3001/api/v1/users/:id` | Returns a specific user that satisfy the id. |
| `POST - localhost:3001/api/v1/users` | Create a new user. |
| `PUT - localhost:3001/tasks/api/v1/users/:id` | Updates an existing user with new information. |
| `DELETE - localhost:3001/api/v1/users/:id` | Delete a specific user that satisfy the id. |
| `DELETE - localhost:3001/api/v1/users` | Delete all users. |

## Using the API
The following examples uses [Isomnia](https://insomnia.rest/) to make the requests, however you can use other tools, if you prefer.

### Users (`/users`)
It has all the information relevant to the users registered in the database.

#### List all users [GET `/users`]
+ Response 200 OK (application/json)

          [
            {
              "id": 1,
              "email":"test@test.com",
              "password": "123456"
            },
            {
              "id": 2,
              "email": "testl@test.com"
              "password": "123456"
            },
            {
              "id": 3,
              "email": "testz@test.com"
              "password": "123456"
            },
            {
              "id": 4,
              "email": "test3@test.com',
              "password": "123456"
            }
          ]
#### Create a new user [POST `/users`]
+ Attributes (object)
  + email: user email (must be a string, required field and type email)
  + password: user password (must be a string, required and minimum length is 6)

+ Request (application/json)
+ Body

          {
            "email":"test@test.com",
            "password": "123456"
          }

+ Response 201 Created (application/json)

          {
            "id": 1,
          }

+ Response 400 Bad Request (application/json)

          {
            "message": "\"email\" is required"
          }

+ Response 400 Bad Request (application/json)

          {
             message: '\"email\" must be a valid email' 
          }

+ Response 400 Bad Request (application/json)

          {
            "message": "\"password\" is required"
          }

+ Response 400 Bad Request (application/json)

          {
            "message": '"password" length must be 6 characters long',
          }          

+ Response 409 Bad Request (application/json)

          {
            message: '\"user\" already exists'
          }

#### List an user by id [GET `/users/:id`]   
+ Response 200 OK (application/json)

          [
            {
              "id": 1,
              "email":"test@test.com",
              "password": "123456"
            }
          ]

#### Update an user [PUT `/users/:id`]
+ Attributes (object)
  + email: user email (must be a string, required field and type email)
  + password: user password (must be a string, required and minimum length is 6)

+ Request (application/json)
+ Body


          {
            "email":"test@test.com",
            "password": "123456"
          }

+ Response 200 OK (application/json)

          {
            message: 'User updated successfully'
          }

+ Response 404 Not Found (application/json)

          {
            "message": "/"user/" not found!"
          }

+ Response 400 Bad Request (application/json)

          {
            "message": "\"email\" is required"
          }

+ Response 400 Bad Request (application/json)

          {
             message: '\"email\" must be a valid email' 
          }

+ Response 400 Bad Request (application/json)

          {
            "message": "\"password\" is required"
          }

+ Response 400 Bad Request (application/json)

          {
            "message": '"password" length must be 6 characters long',
          }

#### Delete an user by ID [DELETE `/users/{id}`]   
+ Response 200 OK (application/json)

          {
            message: 'User deleted successfully'
          }
+ Response 404 Not Found (application/json)

          {
            "message": "\"user\" not found!"
          } 

#### Delete all users [DELETE `/users`]   
+ Response 200 OK (application/json)

          {
            message: ' all users deleted successfully'
          }

## Author

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/davi-soares-coura/" target="_blank" rel="noopener noreferrer">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE-3zAXIVd3tw/profile-displayphoto-shrink_800_800/0/1633029711494?e=1658361600&v=beta&t=_AWbgG4037Bz6FOuIjnxSGL5ukkrivc7OsGIo6NuUCw" width="100px;" alt="Foto do Davi Soares"/><br>
        <sub>
          <b>Davi Soares Coura</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
