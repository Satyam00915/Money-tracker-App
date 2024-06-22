# Money Tracker App

A full-stack Money Tracker application built with React for the frontend, Express for the backend, MongoDB for the database, and Zod for schema validation.

Welcome to my awesome project!

![image.png](frontend\src\assets\image.png)

## Features

- User Authentication
- Add new transactions
- View transaction history
- Search transactions by ID
- Track income and expenses
- Responsive design

## Technologies Used

- **Frontend**: React
- **Backend**: Express
- **Database**: MongoDB
- **Validation**: Zod

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/money-tracker-app.git
   cd money-tracker-app
   ```

2. **Install dependencies for the backend**:

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Create a `.env` file in the `backend` directory**:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/transaction
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. **Start the MongoDB server**:

   Ensure your MongoDB server is running. If using a local instance, you can start it with:

   ```bash
   mongod
   ```

2. **Start the backend server**:

   ```bash
   cd backend
   npm start
   ```

3. **Start the frontend development server**:

   ```bash
   cd ../frontend
   npm start
   ```

4. **Open your browser**:

   Navigate to `http://localhost:3000` to view the application.

## Project Structure

### Backend

- **Express**: Handles the API requests and serves the frontend in production.
- **MongoDB**: Stores the user data and transactions.
- **Zod**: Validates the data schemas.

### Frontend

- **React**: Provides the UI components and manages the application state.
- **Context API**: Manages global state for the authentication and transaction data.
- **React Router**: Handles the routing for the application.

### Transactions

- `GET /api/transactions`: Get all transactions for a user.
- `POST /api/transactions`: Add a new transaction.
- `GET /api/transactions/:id`: Get a transaction by ID.

## Validation

All API requests are validated using Zod schemas to ensure data integrity and prevent malicious input.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Zod](https://github.com/colinhacks/zod)
