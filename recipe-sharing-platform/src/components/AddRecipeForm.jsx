import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleIngredientsChange = (e) => setIngredients(e.target.value);
  const handleInstructionsChange = (e) => setInstructions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter((ingredient) => ingredient !== "");
    if (ingredientsList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    setError("");

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      instructions: instructions.split("\n").map((step) => step.trim()),
    };

    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div
      className="container mx-auto px-4 py-8 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url("https://www.example.com/your-image.jpg")',
      }}
    >
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Add a New Recipe
      </h2>

      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 bg-opacity-75"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-semibold mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={handleIngredientsChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients (one per line)"
            rows="5"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="instructions"
            className="block text-lg font-semibold mb-2"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={handleInstructionsChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter cooking instructions"
            rows="5"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
