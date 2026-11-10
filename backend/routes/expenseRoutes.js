const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");


// GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ADD new expense
router.post("/", async (req, res) => {
  try {
    const newExpense = new Expense({
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category
    });

    const savedExpense = await newExpense.save();
    res.json(savedExpense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// UPDATE expense
router.put("/:id", async (req, res) => {
  try {

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category
      },
      { new: true }
    );

    res.json(updatedExpense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE expense
router.delete("/:id", async (req, res) => {
  try {

    await Expense.findByIdAndDelete(req.params.id);

    res.json({ message: "Expense deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;