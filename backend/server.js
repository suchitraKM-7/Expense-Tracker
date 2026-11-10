const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose
  .connect("mongodb://127.0.0.1:27017/expense_tracker")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

/* Expense Schema */

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

/* GET all expenses */

app.get("/api/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ADD new expense */

app.post("/api/expenses", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* DELETE expense */

app.delete("/api/expenses/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* UPDATE expense */

app.put("/api/expenses/:id", async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Start Server */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});