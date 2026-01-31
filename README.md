
# 🎟️ Ticket Management System

A full-stack ticket management web application built with **Next.js (App Router)** and **MongoDB**.  
The app allows users to create, view, and manage support tickets through RESTful API routes and a React-based interface.

This project was built to practice real-world full-stack development concepts, including API design, database modeling, dynamic routing, and server-side rendering behavior in Next.js.

---

## 🚀 Features

- Create, view, and manage(update/delete) support tickets
- Dynamic API routes using route parameters 
- Backend data modeling with MongoDB and Mongoose
- Server-side logic using Next.js App Router API handlers
- error handling and HTTP status responses

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Next.js API Routes
- **Database:** MongoDB, Mongoose
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)

---

## 🔗 API Routes

- | GET | `/api/Tickets` | Fetch all tickets |
- | POST | `/api/Tickets` | Create a new ticket |
- | GET | `/api/Tickets/[id]` | Fetch a ticket by ID |
- | PUT | `/api/Tickets/[id]` | Update a ticket by ID |
- | DELETE | `/api/Tickets/[id]` | Delete a ticket by ID |

---

## ⚙️ Local Setup

### Prerequisites
* Node.js and npm installed on your machine.
  
### 1. Clone the repository
bash
git clone https://github.com/EnobongOffiong/ticket-system.git
cd ticket-system

2. **Install project dependencies**
     npm install

3.  **Set up environment variables**
    Create a .env.local file in the root directory:
    MONGODB_URI=your_mongodb_connection_string

4. **Run the development server**
   npm run dev
   This will run the app on your machine. Open [http://localhost:3000] to view it in your browser.



The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
