# Movie Ticket Booking App

A full-stack web application for booking movie tickets with a modern UI and real-time seat selection.

## Features

- **Movie Selection**: Choose from a list of available movies
- **Time Slot Selection**: Select preferred show timings
- **Interactive Seat Selection**: Visual seat map with availability
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: See your selections update in real-time
- **Booking History**: View your last booking details
- **Form Validation**: Ensures all required fields are filled correctly

## Tech Stack

### Frontend
- React 19.1.1
- Vite (Build Tool)
- TailwindCSS (Styling)
- Context API (State Management)
- Axios (HTTP Client)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS (Cross-Origin Resource Sharing)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (running locally or connection string)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/booking-app
   PORT=8080
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
booking-app/
├── backend/
│   ├── node_modules/
│   ├── models/
│   │   └── schema.js
│   ├── routes/
│   │   └── booking.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Context/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## API Endpoints

### `POST /api/booking`
Create a new booking.

**Request Body:**
```json
{
  "movie": "Movie Name",
  "slot": "10:00 AM",
  "seats": {
    "A1": 2,
    "A2": 0,
    "A3": 0,
    "A4": 0,
    "D1": 0,
    "D2": 0
  }
}
```

### `GET /api/booking`
Get the last booking details.

## Environment Variables

### Backend
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Port number for the server (default: 8080)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Built with React and Node.js
- Styled with TailwindCSS
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

Developed with ❤️ by Abhinav Sharma
