import React, { useState } from "react";
import InputField from "../InputField";
import "./ExpenseForm.css";

const initalState = {
  title: "",
  price: "",
  date: "",
};

const ExpenseForm = (props) => {
  const { onSaveExpenseData, onCancel } = props;

  const [formState, setFormState] = useState(initalState);

  const handleChange = (event) =>
    setFormState({ ...formState, [event.target.name]: event.target.value });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: formState.title,
      price: formState.price,
      date: new Date(formState.date),
    };

    onSaveExpenseData(expenseData);
    setFormState(initalState);
  };

  const formValues = [
    { type: "text", name: "title", label: "Title", value: formState.title },
    {
      type: "number",
      name: "price",
      label: "Price",
      value: formState.price,
      min: 0.0,
      step: 1,
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      value: formState.date,
      min: "2018-01-01",
      max: "2024-12-31",
    },
  ];

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
      {formValues.map((input, index) => <InputField key={index} {...input} handleChange={handleChange} className="new-expense__control"/>)}
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
