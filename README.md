# Skills Exchange Platform

**Skills Exchange Platform** is a platform where users can share their skills and learn from others. This project aims to create a collaborative environment for individuals to enhance their knowledge and expertise through skill-sharing.

## Features
- Share your skills with the community.
- Learn from other users' shared skills.
- User-friendly interface with modern design.
- Secure and scalable backend.

## Live Demo
Experience the live application here: [Skills Exchange Platform on Netlify](https://skillexchangeplateform.netlify.app)

## Project Structure
The repository is organized into two main folders:
1. **frontend**: Contains the React-based frontend code (built with Vite).
2. **backend**: Contains the backend code powered by Node.js and MongoDB (NoSQL database).

---

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

### Installation

#### Clone the Repository
```bash
git clone https://github.com/pankajyadav8523/Skill-Exchange-Plateform.git
cd Skill-Exchange-Plateform
```

---

#### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run locally, and you can access it in your browser at the URL provided in the terminal.

---

#### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following configuration (replace `<your-value>` with actual values):
     ```env
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will run locally on the specified port (default: `5000`).

---

## Usage
1. Start both the frontend and backend servers.
2. Open your browser and go to `http://localhost:<frontend-port>` (default: `http://localhost:5173` for Vite).
3. Explore the platform to share and learn skills!
