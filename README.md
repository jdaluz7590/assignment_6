# Coffee Shop API

## Live Application
https://assignment-6-zu3b.onrender.com

## GitHub Repository
https://github.com/jdaluz7590/assignment_6

---

## Overview

This project is a Coffee Shop REST API built using **Node.js, Express, and MongoDB**.  
The API allows users to retrieve product information and create or retrieve coffee orders.

The application is deployed on **Render** and uses **MongoDB Atlas** for cloud database storage.

This project demonstrates:

- Express.js API development
- MongoDB database integration using Mongoose
- RESTful API design
- Deployment to a cloud hosting platform
- Use of environment variables for configuration

---

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/jdaluz7590/assignment_6.git
cd assignment_6
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File

- Create a .env file in the root directory and add:
    MONGO_URI=your_mongodb_atlas_connection_string
    PORT=3000

### 4. Start the Server

```bash
npm start
```
- The server will run locally at:
    http://localhost:3000



# API Endpoints

## Health Check

### GET /health

Used to verify that the API is running.

Example:

```
https://assignment-6-zu3b.onrender.com/health
```

Response:

```json
{
  "status": "ok"
}
```

---

## Get Products

### GET /products

Returns a list of available coffee products.

Example:

```
https://assignment-6-zu3b.onrender.com/products
```

Example Response:

```json
[
  { "id": 1, "name": "Espresso", "price": 2.5 },
  { "id": 2, "name": "Americano", "price": 3.0 },
  { "id": 3, "name": "Latte", "price": 4.5 },
  { "id": 4, "name": "Cappuccino", "price": 4.0 },
  { "id": 5, "name": "Mocha", "price": 4.75 },
  { "id": 6, "name": "Cold Brew", "price": 3.5 }
]
```

---

## Get All Orders

### GET /orders

Returns all orders stored in the MongoDB database.

Example:

```
https://assignment-6-zu3b.onrender.com/orders
```

Example Response:

```json
[
  {
    "_id": "65f123abc456def789012345",
    "customerName": "Justin",
    "drink": "Latte",
    "size": "Large",
    "quantity": 2,
    "status": "pending"
  }
]
```

---

# Creating an Order

## POST /orders

Creates a new coffee order in the database.

Example URL:

```
https://assignment-6-zu3b.onrender.com/orders
```

### Headers

```
Content-Type: application/json
```

### Example Request Body

```json
{
  "customerName": "Justin",
  "drink": "Latte",
  "size": "Large",
  "quantity": 2
}
```

---

## Testing POST Requests

Because browsers only send **GET requests** from the address bar, POST requests must be tested using tools like:

- Thunder Client (VS Code extension)
- Postman
- curl

---

## Example Using Thunder Client

1. Open Thunder Client in VS Code  
2. Create a **POST request**  
3. Enter the URL:

```
https://assignment-6-zu3b.onrender.com/orders
```

4. Select **Body → JSON**
5. Paste:

```json
{
  "customerName": "Justin",
  "drink": "Latte",
  "size": "Large",
  "quantity": 2
}
```

6. Click **Send**

---

## Example Using cURL

```bash
curl -X POST https://assignment-6-zu3b.onrender.com/orders \
-H "Content-Type: application/json" \
-d "{\"customerName\":\"Justin\",\"drink\":\"Latte\",\"size\":\"Large\",\"quantity\":2}"
```

---

## Example Successful Response

```json
{
  "_id": "65f123abc456def789012345",
  "customerName": "Justin",
  "drink": "Latte",
  "size": "Large",
  "quantity": 2,
  "status": "pending",
  "createdAt": "2026-03-11T22:15:00.000Z"
}
```

---

# Error Handling

If required fields are missing or invalid, the API returns an error instead of crashing.

Example bad request:

```json
{
  "customerName": "",
  "quantity": 0
}
```

Possible response:

```json
{
  "error": "Order validation failed"
}
```

---

# Deployment Notes

This API is deployed using **Render's free tier**.

Because free-tier services may spin down after inactivity, the first request after some time may take **30–60 seconds** to respond. This is known as a **cold start** and is normal for free cloud hosting.
