# ld-backend-test

## MySQL DB:

The Database script is found on the database folder

#Auth

### POST /auth/generate-apikey/:id

Generate a new Api Key with the user id

### GET /auth/get-apikey/:id

Fecth de current active API Key 

## API Key:

To be able to use the endpoints it is necessary to add the key in the request header under the name 'key'

#Users

### POST /users/create

Creates a new user record, requires a body with the following structure:
{
  name: string;
  lastname: string;
  birthdate: Date;
  email: string;
  id: number;
  area: number;
  salary: number;
  state: "active" | "inactive";
}

### GET /users/all (Require API Key)

Retreieves all user records on the database, returns a response with the following structure:
{
  users: [],
}

### GET /users/:id (Require API Key)

Retrieves the record of the user identified with :id

### PUT /users/update (Require API Key)

Updates the record of the user identified with id, needs a body with the following strucuture:
{
  name: string;
  lastname: string;
  birthdate: Date;
  email: string;
  id: number;
  area: number;
  salary: number;
  state: "active" | "inactive";
}

### DELETE /users/delete/:id (Require API Key)

Deletes the record of the user identified with :id

# Areas

### POST /areas/create (Require API Key)

Creates a new area record, requires a body with the following structure:
{
  code: number;
  name: string;
  leader: number;
  state: "active" | "inactive";
}

### GET /areas/all (Require API Key)

Retreieves all area records on the database, returns a response with the following structure:
{
  areas: [],
}

### GET /areas/:code (Require API Key)

Retrieves the record of the area identified with :code

### PUT /areas/update (Require API Key)

Updates the record of the area user identified with code, needs a body with the following strucuture:
{
  code: number;
  name: string;
  leader: number;
  state: "active" | "inactive";
}

### DELETE /areas/delete/:code (Require API Key)

Deletes the record of the user identified with :id
