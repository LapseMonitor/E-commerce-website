# Simple E-commerce Website

This project contains:

- **React frontend** (`/frontend`) to display products and manage a basic cart state.
- **Spring Boot backend** (`/backend`) with a local **MongoDB** connection.

## Prerequisites

- Java 17+
- Maven 3.9+
- Node.js 18+
- MongoDB running locally on `mongodb://localhost:27017`

## Run backend

```bash
cd backend
mvn spring-boot:run
```

The backend runs on `http://localhost:8080` and reads/writes products in the `ecommerce` database.

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and fetches data from:

- `GET http://localhost:8080/api/products`
