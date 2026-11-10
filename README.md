# 💰 Expense Tracker

A web-based Expense Tracker application developed using the MERN stack to help users manage and monitor their daily expenses efficiently.

The application allows users to add, view, edit, delete, and filter expenses through a simple and user-friendly dashboard.

## 🚀 Features

- **Dashboard Overview:** View all recorded expenses in one place.
- **Add Expense:** Record expenses with title, amount, category, and date.
- **Edit Expense:** Update previously recorded expense details.
- **Delete Expense:** Remove unwanted expense records.
- **Category Filter:** Filter expenses based on categories.
- **Date Filter:** View expenses recorded on a specific date.
- **Total Expense:** Automatically calculate the total of filtered expenses.
- **Database Integration:** Store and retrieve expense records using MongoDB.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- Axios
- React Router DOM
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## 📂 Project Structure

```text
Expense-Tracker/
│
├── backend/
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── AddExpense.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/suchitraKM-7/Expense-Tracker.git
```

### 2. Navigate to the Project Folder

```bash
cd Expense-Tracker
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Start the backend server:

```bash
node server.js
```

The backend server runs at:

```text
http://localhost:5000
```

### 4. Frontend Setup

Open another terminal:

```bash
cd Expense-Tracker/frontend
npm install
```

Start the React application:

```bash
npm start
```

The frontend runs at:

```text
http://localhost:3000
```

### 5. Database Configuration

Make sure MongoDB is installed and running locally.

The application connects to the following MongoDB database:

```text
mongodb://127.0.0.1:27017/expense_tracker
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/expenses` | Retrieve all expenses |
| POST | `/api/expenses` | Add a new expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

## 🎯 Project Objective

The main objective of this project is to develop a simple and efficient expense management application that helps users record, organize, and monitor their daily spending.

## 🔮 Future Enhancements

- User authentication and authorization.
- Monthly and yearly expense reports.
- Interactive charts and graphical analytics.
- Budget management and spending limits.
- Export expense reports.

## 👩‍💻 Developed By

**Suchitra K M**

MCA Graduate | Full Stack Developer

GitHub: https://github.com/suchitraKM-7

---

⭐ If you find this project useful, consider giving it a star!
