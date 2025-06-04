# GeoSensing Test Program

## Project Description
GeoSensing Test Program is a full-stack job listing application that allows users to post job openings and search for jobs. The frontend is built with React and styled using Tailwind CSS, while the backend is powered by an Express server connected to a MongoDB database using Mongoose.

## Features
- Post new job listings with description, experience, profile, and required technologies.
- Search and browse job listings with real-time search functionality.
- Responsive and user-friendly interface using React and Tailwind CSS.
- RESTful API backend with Express and MongoDB.

## Technology Stack
- Frontend:
  - React
  - React Router DOM
  - Axios
  - Tailwind CSS
- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - CORS

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance (cloud or local)

### Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd GeoSensing_Test_Program/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update MongoDB connection string in `server.js` if needed.
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd GeoSensing_Test_Program/client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage
- Open your browser and go to `http://localhost:3000` to access the frontend.
- Use the "Post Job" page to add new job listings.
- Use the "Hire" page to search and browse available jobs.

## API Endpoints

- `POST /api/jobs` - Add a new job listing.
- `GET /api/jobs` - Retrieve all job listings.
- `GET /api/jobs/search?keyword=your_keyword` - Search job listings by keyword in description, profile, or technologies.

## Screenshots
Screenshots of the application UI are available in the `Images` folder.


