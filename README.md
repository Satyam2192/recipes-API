Recipes API Documentation
Welcome to the Recipes API documentation! This API allows you to manage and retrieve recipes from a database. Below are the endpoints and functionalities provided by the API.

Base URL
Base URL: https://recipes-api-w6l4.onrender.com/api/v1 (or) http://localhost:7000/api/v1
Endpoints
1. Get All Recipes
Endpoint: /recipes
Description: Retrieve a list of all recipes available in the database.
Authentication: Requires auth privileges.
2. Get Recipe by ID
Endpoint: /recipes/:id
Description: Retrieve details of a specific recipe identified by its unique ID.
Authentication: Requires auth privileges.
Parameters:
id (Path parameter): ID of the recipe.
3. Create New Recipe
Endpoint: /recipes
Description: Add a new recipe to the database.
Authentication: Requires admin privileges.
Request Body: Should include details of the new recipe.
4. Update Recipe by ID
Endpoint: /recipes/:id
Description: Update details of an existing recipe identified by its unique ID.
Authentication: Requires admin privileges.
Parameters:
id (Path parameter): ID of the recipe.
Request Body: Should include updated details of the recipe.
5. Delete Recipe by ID
Endpoint: /recipes/:id
Description: Delete a recipe from the database based on its unique ID.
Authentication: Requires admin privileges.
Parameters:
id (Path parameter): ID of the recipe.
Deployment
Deployed Link: Recipes API on Render
Postman Documentation
Postman Documentation: Recipes API Postman
Feel free to explore and interact with the API using the provided endpoints and authentication details. If you have any questions or issues, please refer to the documentation or contact the API administrator. Enjoy cooking and coding! 🍲👩‍💻
