import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// import items from "../data/items";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    // console.log("name changed!");
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    // console.log("category selected!");
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    // console.log("item submitted!");
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
