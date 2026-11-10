import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  const resetFilters = () => {
    setCategoryFilter("All");
    setDateFilter("");
  };

  /* Get categories */

  const categories = [...new Set(expenses.map((exp) => exp.category))];

  /* Filter expenses */

  const filteredExpenses = expenses.filter((exp) => {

    const categoryMatch =
      categoryFilter === "All" || exp.category === categoryFilter;

    const dateMatch =
      !dateFilter ||
      new Date(exp.date).toISOString().substring(0, 10) === dateFilter;

    return categoryMatch && dateMatch;

  });

  /* Total expense */

  const totalExpense = filteredExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (

    <div className="p-6">

      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>

      {/* Total Expense */}

      <div className="mb-8">

        <div className="bg-blue-500 text-white p-6 rounded-xl shadow w-64">
          <h2>Total Expense</h2>
          <p className="text-2xl font-bold">₹{totalExpense}</p>
        </div>

      </div>

      {/* Filters */}

      <div className="flex gap-6 mb-8">

        {/* Category Filter */}

        <div>

          <label className="font-semibold mr-2">
            Category:
          </label>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border p-2 rounded"
          >

            <option value="All">All</option>

            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}

          </select>

        </div>

        {/* Date Filter */}

        <div>

          <label className="font-semibold mr-2">
            Date:
          </label>

          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border p-2 rounded"
          />

        </div>

        {/* Reset Button */}

        <button
          onClick={resetFilters}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

      </div>

      {/* Expense Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {filteredExpenses.map((expense) => (

          <div
            key={expense._id}
            className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition"
          >

            <h3 className="text-lg font-bold">
              {expense.title}
            </h3>

            <p className="text-green-600 font-semibold">
              ₹{expense.amount}
            </p>

            <p className="text-gray-500">
              {expense.category}
            </p>

            <p className="text-gray-400 text-sm">
              {new Date(expense.date).toLocaleDateString()}
            </p>

            <div className="flex gap-2 mt-3">

              <button
                onClick={() => navigate("/add", { state: expense })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteExpense(expense._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Home;