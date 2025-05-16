# MERN Book App

This project is a full-stack application that uses Vite and React in the frontend and Express/MongoDB in the backend. React router v7 and Tailwind v4 are used. I hope you can find this helpful as a beginner repo to implement and customize on your own!

## Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB cluster access

## Project Structure

```
mern_book_app/
├── backend/          # Express server and MongoDB connection
│   ├── config.js     # Configuration file (MongoDB URI, PORT)
│   ├── index.js      # Entry point for backend server
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRoute.js
│   └── package.json
└── frontend/         # React/Vite based frontend
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── ...other files
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Setup

### 1. Clone and Install Dependencies

Clone the repository and install dependencies for both backend and frontend.

#### For the backend:

```sh
cd mern_book_app/backend
npm install
```

#### For the frontend:

```sh
cd mern_book_app/frontend
npm install
```

### 2. Create the Configuration File for Backend

Create a `config.js` file inside the `backend/` folder if it does not already exist.

Example configuration (replace `<YOUR_MONGODB_URI>` with your MongoDB connection string and optionally change the PORT):

```js
//// filepath: [config.js](http://_vscodecontentref_/1)
export const MONGODB_URI = '<YOUR_MONGODB_URI>';
export const PORT = process.env.PORT || 5555;
```

## 3. File Changes for Startup

This project uses separate start scripts for the backend and frontend.  
Make sure your `package.json` files include the following scripts:

### 🔧 Backend (`mern_book_app/backend/package.json`)

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## 4. Running the Project

Run both the backend and the frontend servers in their respective directories using ```npm run dev```. Make sure the localhost port number is the same (will make the code more modular for this later!)

## 5. Customize

The basic functionality is set up. Please feel free to customize and play around with the tailwind classes. 