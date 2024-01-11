#Recipes API Documentation#
This repository provides a RESTful API for managing recipes. You can access the deployed version of this API here. The API documentation is also available on Postman.

Base URL
The base URL for the API is:

Live Deployment: https://recipes-api-w6l4.onrender.com/api/v1
Local Development: http://localhost:7000/api/v1
Endpoints
1. Get All Recipes
Description
Retrieve a list of all recipes available in the database.

Authentication
Requires admin privileges.

HTTP Method
GET

Endpoint
/recipes

2. Get Recipe by ID
Description
Retrieve details of a specific recipe identified by its unique ID.

Authentication
Requires admin privileges.

HTTP Method
GET

Endpoint
/recipes/:id

Parameters
id (Path parameter): ID of the recipe.
3. Create New Recipe
Description
Add a new recipe to the database.

Authentication
Requires admin privileges.

HTTP Method
POST

Endpoint
/recipes

Request Body
Should include details of the new recipe.

4. Update Recipe by ID
Description
Update details of an existing recipe identified by its unique ID.

Authentication
Requires admin privileges.

HTTP Method
PUT

Endpoint
/recipes/:id

Parameters
id (Path parameter): ID of the recipe.
Request Body
Should include updated details of the recipe.

5. Delete Recipe by ID
Description
Delete a recipe from the database based on its unique ID.

Authentication
Requires admin privileges.

HTTP Method
DELETE

Endpoint
/recipes/:id

Parameters
id (Path parameter): ID of the recipe.


Getting Started
Use the deployed link to access the API or set up a local development environment.
Authenticate based on your privileges to access specific endpoints.
Explore various functionalities such as retrieving all recipes, getting details of a specific recipe, adding a new recipe, updating an existing recipe, and deleting a recipe.
Feel free to leverage the provided Postman documentation for a detailed overview of available endpoints and example requests.

Enjoy cooking with the Recipes API! 🍲✨
