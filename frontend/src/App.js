import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";

function App() {
  return (
    <Router>

      <div style={{ padding: "20px" }}>

        <h1 className="text-4xl font-bold mb-4">
            Expense Tracker
        </h1>

        <nav className="text-lg font-semibold space-x-4 mb-6">
          <Link to="/" className="hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/add" className="hover:text-blue-600">
            Add Expense
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;