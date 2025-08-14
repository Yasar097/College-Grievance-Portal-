# 🎓 College Complaint Web Portal

A **MERN stack web application** for managing and tracking student complaints in a college environment.  
This system provides **separate dashboards for Students and Admins** to ensure smooth communication and quick resolution of issues.

---

## 📖 Overview

The **College Complaint Web Portal** replaces outdated manual complaint systems with a **secure, digital platform** where:

- Students can **register, log in, and submit complaints** online.
- Admins can **view, update, and resolve** complaints efficiently.
- Both parties have **real-time updates** on complaint statuses.

---

## ✨ Features

### 👨‍🎓 Student Side
- **JWT-secured authentication** (register & login).
- Submit complaints with:
  - Venue
  - Room number (if applicable)
  - Complaint type (Plumber, Maid, Carpenter, Electrician, etc.)
  - Description of the issue
- View **complaint history** and track status:
  - `Pending`
  - `In Progress`
  - `Resolved`

### 🛠 Admin Side
- **Separate authentication** for admins.
- View all student complaints with full details.
- Update complaint statuses:
  - `Pending`
  - `In Progress`
  - `Resolved`
- Manage workflow for faster problem-solving.

---

## 🖥 Tech Stack

| Layer       | Technology |
|-------------|------------|
| **Frontend** | React (Vite), TailwindCSS, Axios, React Router DOM |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Auth**     | JSON Web Token (JWT) |
| **Tools**    | Postman, Git |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/college-complaint-portal.git
cd college-complaint-portal
