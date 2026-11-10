import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function AddExpense() {

  const location = useLocation();
  const navigate = useNavigate();
  const expenseData = location.state;

  const [title,setTitle] = useState(expenseData ? expenseData.title : "");
  const [amount,setAmount] = useState(expenseData ? expenseData.amount : "");
  const [category,setCategory] = useState(expenseData ? expenseData.category : "");
  const [date,setDate] = useState(expenseData ? expenseData.date?.substring(0,10) : "");

  const handleSubmit = async(e) => {

    e.preventDefault();

    try {

      if(expenseData){

        await axios.put(
          `http://localhost:5000/api/expenses/${expenseData._id}`,
          {
            title,
            amount,
            category,
            date
          }
        );

      } else {

        await axios.post(
          "http://localhost:5000/api/expenses",
          {
            title,
            amount,
            category,
            date
          }
        );

      }

      navigate("/");

    } catch(error){
      console.log(error);
    }

  };

  return (

    <div className="p-6">

      <h2 className="text-2xl font-bold mb-4">
        {expenseData ? "Edit Expense" : "Add Expense"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded"
        >
          {expenseData ? "Update Expense" : "Add Expense"}
        </button>

      </form>

    </div>

  );

}

export default AddExpense;