# MERN App

This is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Table of Contents
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)


## Usage

This application requires a MongoDB database. You can either create a local MongoDB database or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to host it in the cloud.

### Prerequisites
- Node.js
- MongoDB (Local or Atlas)

## Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI=your-mongodb-uri
```

## Install Dependencies
```bash
npm install
cd frontend
npm install
```

## Frontend and Backend
```bash
npm run dev
```

#### Import sample data
```bash
npm run data:import
```


